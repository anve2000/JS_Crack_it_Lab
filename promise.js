const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve();
        }, seconds)
    })
}


wait(2).then(()=>console.log('Hello'))



function processLoanApplication(loanId) {
  return new Promise((resolve, reject) => {
    // Simulate async fetch (e.g., from DB or API)
    setTimeout(() => {
      console.log('🔍 Fetching loan application...');
      const application = { id: loanId, amount: 500000, status: 'PENDING' };
      resolve(application); // ✅ Kick off the chain!
    }, 200);
  })
  .then(app => {
    console.log(`✅ Application loaded: ${app.id}`);
    // Transform: enrich with user data
    return { ...app, user: { name: 'Anvesha', score: 750 } };
  })
  .then(enriched => {
    console.log(`📊 Running risk check for ${enriched.user.name}...`);
    // Simulate async risk engine
    return new Promise(resolve => 
      setTimeout(() => {
        const riskApproved = enriched.user.score > 700;
        resolve({ ...enriched, riskApproved });
      }, 100)
    );
  })
  .then(result => {
    if (!result.riskApproved) {
      throw new Error('❌ Risk check failed');
    }
    console.log('✅ Risk approved');
    return { ...result, status: 'APPROVED' };
  })
  .then(final => {
    console.log(`🎉 Loan ${final.id} approved for ₹${final.amount}`);
    return final.status; // final resolved value
  });
}


processLoanApplication('LOAN-789')
  .then(status => console.log('Final status:', status))
  .catch(err => console.error('Process failed:', err.message));