import Widget from '../widget'
import SectionTitle from '../section-title';
import { StartSingleIndividualAssessment } from '../assessment/viewAssessment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from "axios";

const ViewSingleDirectAssessment = () => {
  const router = useRouter();
  const [payerprop, setpayerprop] = useState();

  useEffect(() => {
    if (router && router.query) {
      let kgtin = router.query.ref;
      let kgtinPost = {
        "KGTIN": `${kgtin}`
      }
      console.log(kgtin);
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZXJueW92aWVAZ21haWwuY29tIiwiZ3JvdXBzIjpbMSwyLDMsNSw0XSwiaWF0IjoxNjQ0MzY5MTg1LCJleHAiOjE2NDQ0MDUxODV9.36890eI0sYK2nqDxrUMj-JGtY4t4cLLPl5_M4OK-tR8'
      // setAuthToken();
      const fetchPost = async () => {
        try {
          let res = await axios.post(`https://rhmapi.bespoque.dev/api/v1/taxpayer/view-individual`, kgtinPost,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              },
            }
          );
            let IndData = res.data.body
            // console.log(IndData);
            setpayerprop(IndData)
            // console.log(payerprop);
        } catch (err) {
          console.log(err);
        }
      };
      fetchPost();
    }
  }, [router]);

  return (
    <>
      <SectionTitle title="Start Single Direct Assessment" />

      <Widget>
        <>
          <StartSingleIndividualAssessment payerprop={payerprop}/>
        </>
      </Widget>
    </>
  );
}
export default ViewSingleDirectAssessment