class EventDispatcherCls {
	listeners = {};

	AddEventListener(eventName:string, listener:any, ...args)
	{
		if (listener == undefined){
			console.warn("listener为空, eventName: "+ eventName);
			return;
		}

		let listeners = this.listeners;
		if (listeners[eventName] == undefined) {
			listeners[eventName] = [];
		}
		
		let eventList:Array<Object> = listeners[eventName];
		eventList.forEach(function (v:any) {
			if (v.eventName == eventName && v.listener == listener){
				console.warn("重复添加的事件监听, eventName: " + eventName);
				return;
			}
		});

		eventList.push({"eventName":eventName,"listener":listener,"args":args,});
	}

	HasEventListener(eventName:string){
		if (this.listeners[eventName] == undefined || this.listeners[eventName].length == 0){
			return false;
		}
		
		return true;
	}

	RemoveEventListener(eventName:string, listener){
		if (this.HasEventListener(eventName) == false){
			return;
		}

		let eventList:Array<Object> = this.listeners[eventName];
		for (let i = eventList.length - 1; i >=0; --i) {
			let event:any = eventList[i];
			if (event.eventName == eventName && event.listener == listener) {
				eventList.splice(i, 1);
			}
		}

		if (eventList.length == 0){
			this.listeners[eventName] = null;
		}
	}

	RemoveEventAllListener(eventName:string){
		if (this.HasEventListener(eventName)){
			this.listeners[eventName] = null;
		}		
	}

	DispatchEvent(eventName:string, ...args){
		if (eventName == undefined || this.HasEventListener(eventName) == false){
			return;
		}

		let eventList:Array<Object> = this.listeners[eventName].slice(0);
		for (let i = 0; i < eventList.length; ++i) {
			let obj:any = eventList[i];
			let listener:any = obj.listener;
			// listener.apply(this, obj.args.concat(args));
			listener(...obj.args.concat(args))
		}
	}
}

export let EventDispatcherJs = new EventDispatcherCls();


console.log("hello")