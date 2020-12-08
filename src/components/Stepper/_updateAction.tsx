export default function updateAction(state: any, payload: any) {
    return {
      ...state,
      data: {
        ...state.data,
        ...payload
      }
    };
  }
  