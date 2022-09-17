var axios = require('axios')

async function getCustomersIds(base_url) {
  let response = await axios.get(base_url);
  if (response.status == 200) {
    let all_ids = response.data.customerIds
    for (var i=0;i<all_ids.length;i++) {
      await getCustomerName(base_url, all_ids[i])
    }
  }
}

async function getCustomerName(base_url, cust_id) {
  let cust_name = await axios.get(`${base_url}/${cust_id}`);
  console.log(cust_name.data.id+' '+cust_name.data.first_name+' '+cust_name.data.last_name)
}

getCustomersIds('https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com/customers');