const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNjhhNzM2OS01YWYxLTQ2ZWYtYWViMS03YzczNGE5MDU4YmMiLCJlbWFpbCI6InBhdWwubGFjb3V0aWVyZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZjI1OTVkZDBkN2FiYTY0YjFkZDgiLCJzY29wZWRLZXlTZWNyZXQiOiJmNzFkMWVmMjI4Y2Q0M2U5M2NkNGQ1YTRjZWViOGRjMzlmM2RiM2Q3Mjc0YzM3MzExODBjOWY1YTIyYjliMjFiIiwiaWF0IjoxNzA3MjI3NDU4fQ.-MFkYf0wqL-53U1zn3faDsw_S6qZ1v1DAmivcdbtDsw'


const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "C:/Users/paull/Documents/ESILV A4 S2/Decentralized/Chaton.jpeg";

    const file = fs.createReadStream(src)
    formData.append('file', file)

    const pinataMetadata = JSON.stringify({
        name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
        cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT}`
            }
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

pinFileToIPFS()