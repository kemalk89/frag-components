export const LOCAL_STORAGE_KEY = 'swimLanesConfig';

export const MyAPI = {

  saveBoard: async (swimLaneConfig) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(swimLaneConfig));
  },

  fetchBoard: async () => {
    if (! localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        lanes: [
          { columnId: '1', title: 'TODO' },
          { columnId: '2', title: 'In Progress' },
          { columnId: '3', title: 'Test' },
          { columnId: '4', title: 'Review' },
        ],
        cards: [
          { id: '1', columnId: '1', title: 'Feature XY implementieren' }
        ]
      }));
    }

    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }
}
