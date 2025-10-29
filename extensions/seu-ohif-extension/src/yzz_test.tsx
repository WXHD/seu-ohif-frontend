import { AspectAtomConfig, AspectAtomConfigList, AspectConfig } from './reporttype';
import { AnalysisAtomConfig, AnalysisTableConfig, AnalysisConfig } from './reporttype';
import {
    ReportSheet,
    CollapseConfig,
    StatusConfig,
    FieldItem,
    Header,
    Panel,
    RowItem,
    RowAtomItem,
    RowAtomTextItem,
    RowAtomImageItem,
    RowAtomListItem,
    RowAtomInputItem
} from './reporttype';

const aspectConfig: AspectAtomConfig = {
    text: "C",
    score: "30",
    normal: "0"
};
const aspectConfigListRight: AspectAtomConfigList = {
    type: "right",
    aspect: [{ text: "C", score: "5", normal: "0" },
    { text: "IC", score: "90", normal: "1" },
    { text: "L", score: "80", normal: "1" },
    { text: "I", score: "90", normal: "1" },
    { text: "M1", score: "80", normal: "1" },
    { text: "M2", score: "90", normal: "1" },
    { text: "M3", score: "80", normal: "1" },
    { text: "M4", score: "90", normal: "1" },
    { text: "M5", score: "80", normal: "1" },
    { text: "M6", score: "90", normal: "1" },]
};
const aspectConfigListLeft: AspectAtomConfigList = {
    type: "left",
    aspect: [{ text: "C", score: "90", normal: "1" },
    { text: "IC", score: "70", normal: "0" },
    { text: "L", score: "95", normal: "1" },
    { text: "I", score: "90", normal: "1" },
    { text: "M1", score: "80", normal: "1" },
    { text: "M2", score: "90", normal: "1" },
    { text: "M3", score: "80", normal: "1" },
    { text: "M4", score: "90", normal: "1" },
    { text: "M5", score: "80", normal: "1" },
    { text: "M6", score: "90", normal: "1" },]
};
const aspectConfigAll: AspectConfig = {
    rightScore: "7",
    leftScore: "8",
    rightAspect: aspectConfigListRight,
    leftAspect: aspectConfigListLeft
};

const analysisTableConfig: AnalysisTableConfig = {
    index: 0,
    title: '核心梗死灶分析',
    header: [{ content: '病灶' }, { content: '脑区' }, { content: '核心梗死灶' }, { content: '低灌注区' }],
    content: [[{ content: '1' }, { content: '右侧额叶' }, { content: '18.6ml' }, { content: '25.3ml' }],
    [{ content: '2' }, { content: 'X' }, { content: '9.2ml' }, { content: '64.6ml' }],
    [{ content: '3' }, { content: 'Y' }, { content: '0' }, { content: '0' }],
    [{ content: '4' }, { content: 'Z' }, { content: '0' }, { content: '0' }]]
}
const analysisTableConfig2: AnalysisTableConfig = {
    index: 0,
    title: '灌注参数图分析',
    header: [{ content: '脑区' }, { content: 'CBV' }, { content: 'CBF' }, { content: 'MTT' }, { content: 'TTP' }, { content: 'Tmax' }],
    content: [[{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '右侧基底核' }, { content: '-' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '脑干' }, { content: '*' }, { content: '*' }, { content: '+' }, { content: '+' }, { content: '*' }]]
}
const analysisTableConfig3: AnalysisTableConfig = {
    index: 0,
    title: '灌注参数图分析',
    header: [{ content: '脑区' }, { content: 'CBV' }, { content: 'CBF' }, { content: 'MTT' }, { content: 'TTP' }, { content: 'Tmax' }],
    content: [[{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '右侧基底核' }, { content: '-' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
    [{ content: '脑干' }, { content: '*' }, { content: '*' }, { content: '+' }, { content: '+' }, { content: '*' }]]
}
const analysisListConfig: AnalysisConfig = {
    title: '诊断结果',
    result: 'Mismatch异常',
    tableList: [analysisTableConfig, analysisTableConfig2, analysisTableConfig3]
}

const lesionRowAtomItem: RowAtomItem = {
    text: '斑块性质',
    changecallback: (value: string) => { }
}
const lesionRowAtomItem2: RowAtomItem = {
    items: ['未知斑块', 'A', 'B', 'C', 'D'],
    defaultchoice: 0,
    changecallback: (value: string) => { }
}
const lesionRowItem: RowItem = {
    left: [{ text: '斑块性质', changecallback: (value: string) => { } }],
    right: [{ items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } },
    { items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } }]
}
const lesionRowItem2: RowItem = {
    left: [{ text: '斑块性质', changecallback: (value: string) => { } }],
    right: [{ defaultplaceholder: '请输入', changecallback: (value: string) => { } },
    { items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } }]
}
const lesionFieldHeader: Header = {
    header: {
        left: [{ text: 'LAD中段', changecallback: (value: string) => { } }],
        right: []
    }
}
const lesionFieldItem: FieldItem = {
    index: 0,
    collapseconfig: 'default',
    status: 'expanded',
    header: lesionFieldHeader,
    panel: { panel: [lesionRowItem, lesionRowItem2] }
}
const lesionReportSheet: ReportSheet = {
    title: '诊断结果-default',
    result: '重度狭窄',
    field: [lesionFieldItem]
}

const json1 = {
    rightScore: "7",
    leftScore: "8",
    rightAspect: {
        type: "right",
        aspect: [{ text: "C", score: "5", normal: "0" },
        { text: "IC", score: "90", normal: "1" },
        { text: "L", score: "80", normal: "1" },
        { text: "I", score: "90", normal: "1" },
        { text: "M1", score: "80", normal: "1" },
        { text: "M2", score: "90", normal: "1" },
        { text: "M3", score: "80", normal: "1" },
        { text: "M4", score: "90", normal: "1" },
        { text: "M5", score: "80", normal: "1" },
        { text: "M6", score: "90", normal: "1" },]
    },
    leftAspect: {
        type: "left",
        aspect: [{ text: "C", score: "90", normal: "1" },
        { text: "IC", score: "70", normal: "0" },
        { text: "L", score: "95", normal: "1" },
        { text: "I", score: "90", normal: "1" },
        { text: "M1", score: "80", normal: "1" },
        { text: "M2", score: "90", normal: "1" },
        { text: "M3", score: "80", normal: "1" },
        { text: "M4", score: "90", normal: "1" },
        { text: "M5", score: "80", normal: "1" },
        { text: "M6", score: "90", normal: "1" },]
    }
}

const json2 = {
    title: '诊断结果',
    result: 'Mismatch异常',
    tableList: [{
        index: 0,
        title: '核心梗死灶分析',
        header: [{ content: '病灶' }, { content: '脑区' }, { content: '核心梗死灶' }, { content: '低灌注区' }],
        content: [[{ content: '1' }, { content: '右侧额叶' }, { content: '18.6ml' }, { content: '25.3ml' }],
        [{ content: '2' }, { content: 'X' }, { content: '9.2ml' }, { content: '64.6ml' }],
        [{ content: '3' }, { content: 'Y' }, { content: '0' }, { content: '0' }],
        [{ content: '4' }, { content: 'Z' }, { content: '0' }, { content: '0' }]]
    }, {
        index: 0,
        title: '灌注参数图分析',
        header: [{ content: '脑区' }, { content: 'CBV' }, { content: 'CBF' }, { content: 'MTT' }, { content: 'TTP' }, { content: 'Tmax' }],
        content: [[{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '右侧基底核' }, { content: '-' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '脑干' }, { content: '*' }, { content: '*' }, { content: '+' }, { content: '+' }, { content: '*' }]]
    }, {
        index: 0,
        title: '灌注参数图分析',
        header: [{ content: '脑区' }, { content: 'CBV' }, { content: 'CBF' }, { content: 'MTT' }, { content: 'TTP' }, { content: 'Tmax' }],
        content: [[{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '右侧额叶' }, { content: '*' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '右侧基底核' }, { content: '-' }, { content: '-' }, { content: '+' }, { content: '+' }, { content: '+' }],
        [{ content: '脑干' }, { content: '*' }, { content: '*' }, { content: '+' }, { content: '+' }, { content: '*' }]]
    }]
}

const json3 = {
    title: '诊断结果',
    result: '重度狭窄',
    field: [{
        index: 0,
        collapseconfig: 'default',
        status: 'expanded',
        header: {
            header: {
                left: [{ text: 'LAD中段', changecallback: (value: string) => { } }],
                right: []
            }
        },
        panel: {
            panel: [{
                left: [{ text: '斑块性质', changecallback: (value: string) => { } }],
                right: [{ items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } },
                { items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } }]
            }, {
                left: [{ text: '斑块性质', changecallback: (value: string) => { } }],
                right: [{ defaultplaceholder: '请输入', changecallback: (value: string) => { } },
                { items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } }]
            }]
        }
    }, {
        index: 0,
        collapseconfig: 'default',
        status: 'expanded',
        header: {
            header: {
                left: [{ text: 'LAD中段', changecallback: (value: string) => { } }],
                right: []
            }
        },
        panel: {
            panel: [{
                left: [{ text: '斑块性质', changecallback: (value: string) => { } }],
                right: [{ items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } },
                { items: ['未知斑块', 'A', 'B', 'C', 'D'], defaultchoice: 0, changecallback: (value: string) => { } }]
            }]
        }
    }]
}

const default1 = {
    rightScore: "",
    leftScore: "",
    rightAspect: {
        type: "right",
        aspect: []
    },
    leftAspect: {
        type: "left",
        aspect: []
    }
}

const default2 = {
    title: '',
    result: '',
    tableList: []
}

const default3 = {
    title: '',
    result: '',
    field: []
}

export {
    aspectConfigAll,
    analysisListConfig,
    lesionReportSheet,
    json1,
    json2,
    json3,
    default1,
    default2,
    default3
};
