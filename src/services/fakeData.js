const fakeData = {
  "/bonita/API/bpm/humanTask?c=50&d=rootContainerId&f=state%3Dready": [
    {
      displayDescription: "",
      executedBy: "0",
      rootContainerId: {
        displayDescription: "",
        deploymentDate: "2020-05-23 13:09:36.233",
        displayName: "vacationRequest",
        name: "vacationRequest",
        description: "",
        deployedBy: "4",
        id: "7807794955284266214",
        activationState: "ENABLED",
        version: "1.0",
        configurationState: "RESOLVED",
        last_update_date: "2020-05-23 13:09:36.471",
        actorinitiatorid: "1402"
      },
      assigned_date: "",
      displayName: "Fill Request",
      executedBySubstitute: "0",
      dueDate: "",
      description: "",
      type: "USER_TASK",
      priority: "normal",
      actorId: "1402",
      processId: "7807794955284266214",
      caseId: "11001",
      name: "Fill Request",
      reached_state_date: "2020-05-23 13:10:37.548",
      rootCaseId: "11001",
      id: "220002",
      state: "ready",
      parentCaseId: "11001",
      last_update_date: "2020-05-23 13:10:37.548",
      assigned_id: ""
    },
    {
      displayDescription: "",
      executedBy: "0",
      rootContainerId: {
        displayDescription: "",
        deploymentDate: "2020-05-23 13:09:36.233",
        displayName: "vacationRequest",
        name: "vacationRequest",
        description: "",
        deployedBy: "4",
        id: "7807794955284266214",
        activationState: "ENABLED",
        version: "1.0",
        configurationState: "RESOLVED",
        last_update_date: "2020-05-23 13:09:36.471",
        actorinitiatorid: "1402"
      },
      assigned_date: "",
      displayName: "Fill Request",
      executedBySubstitute: "0",
      dueDate: "",
      description: "",
      type: "USER_TASK",
      priority: "normal",
      actorId: "1402",
      processId: "7807794955284266214",
      caseId: "11002",
      name: "Fill Request",
      reached_state_date: "2020-05-23 13:11:00.584",
      rootCaseId: "11002",
      id: "220004",
      state: "ready",
      parentCaseId: "11002",
      last_update_date: "2020-05-23 13:11:00.584",
      assigned_id: ""
    },
    {
      displayDescription: "",
      executedBy: "0",
      rootContainerId: {
        displayDescription: "",
        deploymentDate: "2020-05-23 13:09:36.233",
        displayName: "vacationRequest",
        name: "vacationRequest",
        description: "",
        deployedBy: "4",
        id: "7807794955284266214",
        activationState: "ENABLED",
        version: "1.0",
        configurationState: "RESOLVED",
        last_update_date: "2020-05-23 13:09:36.471",
        actorinitiatorid: "1402"
      },
      assigned_date: "",
      displayName: "Fill Request",
      executedBySubstitute: "0",
      dueDate: "",
      description: "",
      type: "USER_TASK",
      priority: "normal",
      actorId: "1402",
      processId: "7807794955284266214",
      caseId: "11003",
      name: "Fill Request",
      reached_state_date: "2020-05-23 13:11:06.787",
      rootCaseId: "11003",
      id: "220006",
      state: "ready",
      parentCaseId: "11003",
      last_update_date: "2020-05-23 13:11:06.787",
      assigned_id: ""
    },
    {
      displayDescription: "",
      executedBy: "0",
      rootContainerId: {
        displayDescription: "",
        deploymentDate: "2020-05-23 13:09:36.233",
        displayName: "vacationRequest",
        name: "vacationRequest",
        description: "",
        deployedBy: "4",
        id: "7807794955284266214",
        activationState: "ENABLED",
        version: "1.0",
        configurationState: "RESOLVED",
        last_update_date: "2020-05-23 13:09:36.471",
        actorinitiatorid: "1402"
      },
      assigned_date: "",
      displayName: "Fill Request",
      executedBySubstitute: "0",
      dueDate: "",
      description: "",
      type: "USER_TASK",
      priority: "normal",
      actorId: "1402",
      processId: "7807794955284266214",
      caseId: "11004",
      name: "Fill Request",
      reached_state_date: "2020-05-23 13:11:39.618",
      rootCaseId: "11004",
      id: "220008",
      state: "ready",
      parentCaseId: "11004",
      last_update_date: "2020-05-23 13:11:39.618",
      assigned_id: ""
    }
  ],
  "/bonita/API/bpm/userTask/220002/contract": {
    inputs: [
      {
        inputs: [
          {
            inputs: [],
            type: "TEXT",
            description: null,
            name: "employeeName",
            multiple: false
          },
          {
            inputs: [],
            type: "INTEGER",
            description: null,
            name: "numberOfDays",
            multiple: false
          }
        ],
        type: null,
        description: null,
        name: "requestInput",
        multiple: false
      }
    ],
    constraints: [
      {
        name: "mandatory_requestInput_employeeName",
        expression: "requestInput?.employeeName != null",
        explanation: "employeeName is mandatory for Request",
        inputNames: ["requestInput"]
      },
      {
        name: "mandatory_requestInput_numberOfDays",
        expression: "requestInput?.numberOfDays != null",
        explanation: "numberOfDays is mandatory for Request",
        inputNames: ["requestInput"]
      }
    ]
  }
};

export default fakeData;
