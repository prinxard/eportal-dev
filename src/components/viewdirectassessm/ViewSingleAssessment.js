import Widget from '../widget'
import SectionTitle from '../section-title';
import { StartSingleIndividualAssessment } from '../assessment/viewAssessment';
import { useRouter } from 'next/router';

const ViewSingleDirectAssessment = () => {
  const router = useRouter();

  useEffect(() => {
    if (router && router.query) {
      let year = router.query.ref;
      console.log(year);
  
      setAuthToken();
      const fetchPost = async () => {
        try {
                    

        } catch (e) {
          
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
          <StartSingleIndividualAssessment />
        </>
      </Widget>
    </>
  );
}
export default ViewSingleDirectAssessment