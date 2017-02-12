# This is a written report that estimates the current fair market value of the property that you are buying or selling.
# https://www.equitynationaltitle.com/
# TIME: best: 7d; average: 14d; worst: 3w
# Input: Address, Loan Application
# - Create loan application
# - Mortgage administrator vets / scrubs inbound loan applications: ACCEPT: 50%
# - Mortgage processor reviews dashboard with new loan
# - Mortgage processor vets loan application: ACCEPT: 90%
# - Mortgage processor creates loan estimate (see loan-estimate.py)
# - Initialize the title report (see loan-title-report.py)
# - Initialize the appraisal
# - Appraiser holds appraisal: HOLD: 10%
# - *Notify the mortgage processor of held loan: NOTIFY: 100%
# - Appraiser dones appraisal
