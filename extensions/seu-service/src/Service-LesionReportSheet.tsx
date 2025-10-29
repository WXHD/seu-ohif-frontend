import { ServicesManager } from "@ohif/core/src/services";
import { PubSubService } from "@ohif/core/src/services/_shared/pubSubServiceInterface";

const EVENTS = {
	CONFIG_MODIFIED: 'event::serviceLesionReportSheet:configModified',
};
export const _model = {
	lesionReportSheet_config: [0],
};

export default class Service_LesionReportSheet extends PubSubService {
	private servicesManager: ServicesManager;
	public Hook(x): void {
		// lesionReportSheet_config[0] 为 1 时表示配置已经修改
		// lesionReportSheet_config[0] 为 0 时表示配置未修改
		// lesionReportSheet_config[1] 为配置内容
		_model.lesionReportSheet_config = [1];
		_model.lesionReportSheet_config.push(x);
	};
	public broadcastEvent(x) {
		this._broadcastEvent(EVENTS.CONFIG_MODIFIED, x);
	}
	public subscribeToEvents(func) {
		const x = this.subscribe(EVENTS.CONFIG_MODIFIED, func.bind(this));
		return x.unsubscribe;
	}
	public unsubscribe(func) {
		func();
	}
	public broadcastconfig() {
		// 若配置已经修改则广播事件 并返回true
		if (_model.lesionReportSheet_config[0] == 1) {
			this.broadcastEvent(_model.lesionReportSheet_config[1]);
			return true;
		}
		// 若配置未修改则返回false
		else {
			return false;
		}
	}
	public setHook(Hook) {
		this.Hook = Hook;
	}
	public getHook() {
		return this.Hook;
	}
	constructor(servicesManager: any) {
		super(EVENTS);
		this.servicesManager = servicesManager;
		this.Hook = this.Hook.bind(this);
		this.broadcastEvent = this.broadcastEvent.bind(this);
		this.subscribeToEvents = this.subscribeToEvents.bind(this);
		this.broadcastconfig = this.broadcastconfig.bind(this);
	}
}
