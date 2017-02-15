// Summarize actions
// days: days in state
// accept: rate
// var _ require('lodash');
var $ = {
  MEMBER: {
    APPLICATION: {
      description: 'Create loan application',
      accept: 1,
      days: 0,
      next: ['MORTGAGE_ADMINISTRATOR.VET_LOAN']
    },
    FEEDBACK: {
      description: 'Give feedback  loan application',
      accept: 1,
      days: 0,
      next: ['MORTGAGE_ADMINISTRATOR.VET_LOAN']
    }
  },

  MORTGAGE_ADMINISTRATOR: {
    VET_LOAN: {
      description: 'Mortgage administrator vets / scrubs inbound loan applications: ACCEPT: 50%',
      accept: .5,
      days: 1,
      next: ['MORTGAGE_PROCESSOR.DASHBOARD_REVIEW']
    }
  },

  MORTGAGE_PROCESSOR: {
    DASHBOARD_REVIEW: {
      description: 'Mortgage processor reviews dashboard with new loan',
      accept: 1,
      days: 1,
      next: ['MORTGAGE_PROCESSOR.ACCEPT_LOAN','MEMBER.FEEDBACK']
    },
    ACCEPT_LOAN: {
      description: 'Mortgage processor vets loan application: ACCEPT: 90%',
      accept: .9,
      days: 1.5,
      next: ['MORTGAGE_PROCESSOR.LOAN_ESTIMATE']
    },
    LOAN_ESTIMATE: {
      description: 'Mortgage processor creates loan estimate (see loan-estimate.py)',
      accept: 1,
      days: 0,
      next: ['APPRAISER.REQUEST','TITLE_EXAMINER.REQUEST']
    },
    PROMISSORY_NOTE: {
      description: 'Create terms of the agreement ',
      accept: .8,
      days: 0,
      next: ['LENDER.PROMISSORY_NOTE']
    }
  },

  APPRAISER: {
    REQUEST: {
      description: 'Initialize the appraisal',
      accept: 1,
      days: 0,
      next: ['APPRAISER.HOLD','APPRAISER.APPRAISAL_REPORT']
    },
    HOLD: {
      description: 'Appraiser holds appraisal: HOLD: 10%',
      accept: .1,
      days: 0,
      next: ['APPRAISER.HOLD_NOTIFICATION']
    },
    HOLD_NOTIFICATION: {
      description: 'Notify the mortgage processor of held loan: NOTIFY: 100%',
      accept: 1,
      days: 2,
      next: ['APPRAISER.APPRAISAL_REPORT']
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

var step = function(next) {
  return next[0];
};

var trials = 4;

for (var t = 0; t  < trials; t++) {
  var start = $.MEMBER.APPLICATION;
  var action = start;
  console.log('*** SIMULATION ' + t + ' ***');
  while (true) {
    console.log(action);
    if(!action.next) {
      console.log('*** Loan application completed ***');
      break;
    }
    var threshold = Math.random();
    var accept = action.accept;
    // console.log(accept,threshold);
    if(accept < threshold) {
      console.log('*** Loan application terminated as not acceptable ***');
      break;
    }
    var s = action.next[0].split('.');
    action = $[s[0]][s[1]];
  }
}
