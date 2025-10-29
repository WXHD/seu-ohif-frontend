import { ServicesManager } from "../../../platform/core/src/services";
import { PubSubService } from "../../../platform/core/src/services/_shared/pubSubServiceInterface";

const EVENTS = {
	CHOICE_ADDED: 'event::testService:choiceAdded',
};
const _model = {
	choices: [],
};

export default class TestService extends PubSubService {
	private servicesManager: ServicesManager;
	public Hook(x): void {
		console.log(x);
		//clear choices first
		_model.choices = [];
		_model.choices.push(x);
		console.log(this);
		// console.log(this._broadcastEvent);
		// this._broadcastEvent(EVENTS.CHOICE_ADDED, _model.choices);
		this.broadcastEvent(_model.choices);
	};
	public broadcastEvent(x) {
		console.log(x);
		this._broadcastEvent(EVENTS.CHOICE_ADDED, x);
	}
	//subscribe to events
	public subscribeToEvents(func) {
		console.log(func);
		this.subscribe(EVENTS.CHOICE_ADDED, func.bind(this));
	}
	public setHook(Hook) {
		this.Hook = Hook;
	}
	public getHook() {
		console.log(this.Hook);
		return this.Hook;
	}
	constructor(servicesManager: any) {
		super(EVENTS);
		this.servicesManager = servicesManager;
		this.Hook = this.Hook.bind(this);
		this.broadcastEvent = this.broadcastEvent.bind(this);
		this.subscribeToEvents = this.subscribeToEvents.bind(this);
	}
	// putAnnotations() {
	//   return this.post(/*...*/);
	// }

	// private post(data: any) {
	//   // Implement the post function here
	// }
}
