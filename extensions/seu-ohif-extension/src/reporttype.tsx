//here are specific json format for the report data
//json的每一层级应与数据结构的每一层级对应，包括默认字段，配置和约束



//here are structure of the report data store in the service

type ReportSheet = {
	title: string
	result: string
	field: FieldItem[]
}

type CollapseConfig = 'default' | 'default-collapse' | 'always-collapse' | 'never-collapse'
type StatusConfig = 'collapsed' | 'expanded' | 'editing'
// when state iscollapsed == true,the Component should be Header,otherwise should be Header + Panel
// here's a proto for the state init value and setState function for all the CollapseConfig
// type CollapseConfigMap ={
//     'default': [false, Setiscollapsed(!iscollapsed) ];
//     'default-collapse': [true, Setiscollapsed(!iscollapsed)];
//     'always-collapse': [true, ()=>()];
//     'never-collapse': [false, ()=>()];
// }
type FieldItem = {
	index: number
	collapseconfig: CollapseConfig
	status: StatusConfig
	header: Header
	panel: Panel
}
type Header = {
	header: RowItem
}
type Panel = {
	panel: RowItem[]
}
type RowItem = {
	left: RowAtomItem[]
	right: RowAtomItem[]
}
type RowAtomItem = RowAtomTextItem | RowAtomImageItem | RowAtomListItem | RowAtomInputItem
type RowAtomTextItem = {
	text: string
	changecallback: (value: string) => void
}
type RowAtomImageItem = {
	src: string
	alt: string
	changecallback: (value: string) => void
}
type RowAtomListItem = {
	items: string[]
	defaultchoice: number
	changecallback: (value: string) => void
}
type RowAtomInputItem = {
	defaultplaceholder: string
	changecallback: (value: string) => void
}

type AspectAtomConfig = {
	text: string
	score: string
	normal: string
}
type AspectAtomConfigList = {
	type: string
	aspect: AspectAtomConfig[]
}
type AspectConfig = {
	rightScore: string
	leftScore: string
	rightAspect: AspectAtomConfigList
	leftAspect: AspectAtomConfigList
}

type AnalysisAtomConfig = {
	content: string
}
type AnalysisTableConfig = {
	index: number
	title: string
	header: AnalysisAtomConfig[]
	content: AnalysisAtomConfig[][]
}
type AnalysisConfig = {
	title: string
	result: string
	tableList: AnalysisTableConfig[]
}

export type {
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
	RowAtomInputItem,

	AspectAtomConfig,
	AspectAtomConfigList,
	AspectConfig,

	AnalysisAtomConfig,
	AnalysisTableConfig,
	AnalysisConfig
};
