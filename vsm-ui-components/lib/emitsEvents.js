export const emitsEvents = superclass =>
  class extends superclass {
    emit(event, detail, bubbles = false) {
      if (!this.canEmit(event)) {
        throw new Error(`Event "${event}" not declared. Make sure you have an emits getter.`);
      }
      return this.dispatchEvent(new CustomEvent(event, { detail, bubbles, composed: bubbles }));
    }

    on(event, handler) {
      if (!this.canEmit(event)) {
        throw new Error(`Event "${event}" not declared. Make sure you have an emits getter.`);
      }
      return this.addEventListener(event, handler);
    }

    canEmit(event) {
      return this.emits && this.emits[event];
    }
  };

export default emitsEvents;
