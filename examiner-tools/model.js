// Summarize actions
// days: days in state
// accept: rate
var loanEntityStates = {
  MEMBER: {
    CREATE_LOAN: {
      description: 'Create loan application',
      accept: 100,
      days: 0

    }
  },

  MORTGAGE_ADMINISTRATOR: {
    VET_LOAN: {
      description: 'Mortgage administrator vets / scrubs inbound loan applications: ACCEPT: 50%',
      accept: .5,
      days: 1
    }
  },

  MORTGAGE_PROCESSOR: {
    DASHBOARD_REVIEW: {
      description: 'Mortgage processor reviews dashboard with new loan',
      accept: 1,
      days: 1
    },
    ACCEPT_LOAN: {
      description: 'Mortgage processor vets loan application: ACCEPT: 90%',
      accept: 1,
      days: 0
    },
    LOAN_ESTIMATE: {
      description: 'Mortgage processor creates loan estimate (see loan-estimate.py)',
      accept: 1,
      days: 0
    }
  },

  APPRAISER: {
    APPRAISE: {
      description: 'Initialize the appraisal',
      accept: 1,
      days: 0
    },
    HOLD: {
      description: 'Appraiser holds appraisal: HOLD: 10%',
      accept: 1,
      days: 0
    },
    HOLD_NOTIFICATION: {
      description: 'Notify the mortgage processor of held loan: NOTIFY: 100%',
      accept: 1,
      days: 2
    }
  },

  TITLE_EXAMINER: {
    TITLE_REPORT: {
      description: 'Initialize the title report (see loan-title-report.py)',
      accept: 1,
      days: 2
    }
  },

  LENDER: {
    CLOSING_DISCLOSURE: {
      description: '',
      accept: 1,
      days: 0
    },
    PROMISSORY_NOTE: {
      description: '',
      accept: 1,
      days: 0
    }
  }
};



var loanStates = {
  // MEMBER['CREATE_LOAN']: MORTGAGE_ADMINISTRATOR['VET_LOAN']
};
