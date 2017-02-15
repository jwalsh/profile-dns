// Summarize actions
// days: days in state
// accept: rate
var _ = loanEntityStates = {
  MEMBER: {
    APPLICATION: {
      description: 'Create loan application',
      accept: 100,
      days: 0,
      next: [_.MORTGAGE_ADMINISTRATOR.VET_LOAN]
    }
  },

  MORTGAGE_ADMINISTRATOR: {
    VET_LOAN: {
      description: 'Mortgage administrator vets / scrubs inbound loan applications: ACCEPT: 50%',
      accept: .5,
      days: 1,
      next: [_.MORTGAGE_PROCESSOR.DASHBOARD_REVIEW]
    }
  },

  MORTGAGE_PROCESSOR: {
    DASHBOARD_REVIEW: {
      description: 'Mortgage processor reviews dashboard with new loan',
      accept: 1,
      days: 1,
      next: [_.MORTGAGE_PROCESSOR.ACCEPT_LOAN]
    },
    ACCEPT_LOAN: {
      description: 'Mortgage processor vets loan application: ACCEPT: 90%',
      accept: .9,
      days: 0,
      next: [_.MORTGAGE_PROCESSOR.LOAN_ESTIMATE]
    },
    LOAN_ESTIMATE: {
      description: 'Mortgage processor creates loan estimate (see loan-estimate.py)',
      accept: 1,
      days: 0,
      next: [_.APPRAISER.REQUEST, _.TITLE_EXAMINER.REQUEST]
    }
  },

  APPRAISER: {
    REQUEST: {
      description: 'Initialize the appraisal',
      accept: 1,
      days: 0,
      next: [_.APPRAISER.HOLD, _.APPRAISER.APPRAISAL_REPORT]
    },
    HOLD: {
      description: 'Appraiser holds appraisal: HOLD: 10%',
      accept: .1,
      days: 0,
      next: [_.APPRAISER.HOLD_NOTIFICATION]

    },
    HOLD_NOTIFICATION: {
      description: 'Notify the mortgage processor of held loan: NOTIFY: 100%',
      accept: 1,
      days: 2,
      next: [_.APPRAISER.APPRAISAL_REPORT]
    },
    APPRAISAL_REPORT: {
      description: 'Notify the mortgage processor of held loan: NOTIFY: 100%',
      accept: 1,
      days: 2
    }

  },

  TITLE_EXAMINER: {
    REQUEST: {
      description: 'Initialize the title report',
      accept: 1,
      days: 0
    },
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
