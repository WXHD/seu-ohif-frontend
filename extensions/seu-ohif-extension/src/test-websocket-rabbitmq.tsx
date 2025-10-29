import React, { useEffect, useRef, useState } from "react";

const StompComponent: React.FC = () => {
    const [taskInput, setTaskInput] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    // 引用当前的 STOMP 客户端实例
    const clientRef = useRef<any>(null);

    useEffect(() => {
        // 动态加载 STOMP.js 库
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@stomp/stompjs@7.0.0/bundles/stomp.umd.min.js";
        script.async = true;

        script.onload = () => {
            console.log("STOMP.js loaded successfully");

            // 初始化 STOMP 客户端
            clientRef.current = new (window as any).StompJs.Client({
                brokerURL: "ws://localhost:15674/ws", // Web STOMP 地址
                connectHeaders: {
                    login: "guest", // RabbitMQ 默认用户
                    passcode: "guest"
                },
                debug: (str: string) => console.log(str),
                reconnectDelay: 5000 // 断线重连间隔
            });

            // 订阅响应队列
            clientRef.current.onConnect = () => {
                console.log("Connected to STOMP server");
                clientRef.current.subscribe("/queue/api_responses", (message: any) => {
                    const response = JSON.parse(message.body);
                    console.log("Received response:", response);
                    setResponse(response.data);
                }, {
                    "auto-delete": "false",
                    durable: "true"
                });
            };

            // 启动连接
            clientRef.current.activate();
        };

        document.body.appendChild(script);

        // 清理函数
        return () => {
            document.body.removeChild(script);
            if (clientRef.current) {
                clientRef.current.deactivate();
            }
        };
    }, []);

    // 提交任务
    const submitTask = () => {
        console.log("Submitting task:", taskInput);

        const requestId = Date.now().toString();
        const payload = {
            request_id: requestId,
            method: "POST",
            path: "http://localhost:5000/dignosis/segmentation_stroke/1.2.276.0.7230010.3.1.2.3253678695.90128.1723548286.823",
            params: {},
            body: { name: taskInput }
        };

        if (clientRef.current) {
            clientRef.current.publish({
                destination: "/queue/api_requests",
                body: JSON.stringify(payload)
            });
        }
    };

    return (
        <div>
            <h1>任务提交</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="输入任务内容"
            />
            <button style={{ backgroundColor: "lightblue" }} onClick={submitTask}>提交任务</button>
            <div>
                <h2 style={{ backgroundColor: "lightblue" }}>响应：</h2>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default StompComponent;
