import SectionTitle from "../section-title";
import Widget from "../widget";
import { SubmitButton } from "../CustomButton/CustomButton";
import { NewFormInput } from "../FormInput/formInputs";
import { ViewAnnualTable } from "../tables/viewAnnual";
import url from "../../config/url";
import setAuthToken from "../../functions/setAuthToken";
import { useEffect, useState } from "react";
import axios from "axios";
import { CustomPagination } from "../pagination/customPagination";
import { formatNumber } from "../../functions/numbers";
import dateformat from "dateformat";
import Loader from "react-loader-spinner";
import Widget1 from "../dashboard/widget-1";
import * as Icons from '../Icons/index';
import { ViewPendingTable } from "../tables/viewDirectAss";
import { ViewCompletedTable } from "../tables/viewCompletedDirect";

const ViewCompleteAss = () => {
  const [post, setPost] = useState(() => []);
  const [sum, setSum] = useState(() => null);
  const [totalemp, setTotalemp] = useState('');
  const [isFetching, setIsFetching] = useState(() => true);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const [postPerPage, setPostPerPage] = useState(() => 10);
  const [year, setYear] = useState('');
  const [query, setQuery] = useState(() => "");
  useEffect(() => {
    // setAuthToken();
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZXJueW92aWVAZ21haWwuY29tIiwiZ3JvdXBzIjpbMSwyLDMsNSw0XSwiaWF0IjoxNjQ0MzY5MTg1LCJleHAiOjE2NDQ0MDUxODV9.36890eI0sYK2nqDxrUMj-JGtY4t4cLLPl5_M4OK-tR8'

    const fetchPost = async () => {
      try {
        let res = await axios.get(`https://rhmapi.bespoque.dev/api/v1/forma/list-assessment`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          }
        );
        res = res.data.body.assessmentApproved;
        console.log(res)
        let employeessTotal = res.length
        setTotalemp(employeessTotal)
        let records = [];
        let sum = [];
        for (let i = 0; i < res.length; i++) {
          let rec = res[i];
          // console.log(rec.tax_pay_cal);
          sum.push(rec.tax_pay_cal);
          rec.tax_pay_cal = formatNumber(rec.tax_pay_cal);
          rec.net_tax_ded = formatNumber(rec.net_tax_ded);
          rec.con_rel_cal = formatNumber(rec.con_rel_cal);
          rec.gross_income = formatNumber(rec.gross_income);
          rec.nhf = formatNumber(rec.nhf);
          rec.tax_pay_cal = formatNumber(rec.tax_pay_cal);
          rec.basicSalary = formatNumber(rec.basicSalary);
          rec.netTaxDeduct = formatNumber(rec.netTaxDeduct);
          rec.totalSalary = formatNumber(rec.totalSalary);
          rec.totalChargeable = rec.totalChargeable / 12;
          rec.totalChargeable = formatNumber(rec.totalChargeable);
          rec.period = rec.payPeriod;
          rec.year = dateformat(rec.year, "yyyy");
          records.push(rec);
        }
        let sumOfTax = sum.reduce((preVal, curVal) => preVal + curVal);
        setIsFetching(false);
        setSum(() => sumOfTax);
        setPost(() => records);
      } catch (e) {
        setIsFetching(false);
        // console.log(e.response);
      }
    };
    fetchPost();
  }, []);


  // Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const next = (currentPage) => setCurrentPage(() => currentPage + 1);
  const previous = (currentPage) => setCurrentPage(() => currentPage - 1);

  const searchHandler = (e) => {
    setQuery(() => e.target.value);
  };

  let res = [];
  const search = (rows) => {
    let data = [];
    data = rows.filter((rows) => rows.kgtin.toLowerCase().indexOf(query) > -1);
    res.push(data);
    return data;
  };

  const searchedPost = search(post).slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <SectionTitle title="View direct assessments" subtitle="View Completed assessments" />

      {isFetching && (
        <div className="flex justify-center item mb-2">
          <Loader
            visible={isFetching}
            type="BallTriangle"
            color="#00FA9A"
            height={19}
            width={19}
            timeout={0}
            className="ml-2"
          />
          <p>Fetching data...</p>
        </div>
      )}
      <Widget>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4">
          <div className="w-full lg:w-2/12">
            <NewFormInput
              label="Search by year"
              required
              onChange={searchHandler}
            />
          </div>
        </div>

        <div className="mt-4">
          {query !== "" ? (
            <>
              <ViewCompletedTable remittance={searchedPost} />
              <CustomPagination
                paginate={paginate}
                totalPosts={res[0].length}
                postPerPage={postPerPage}
                currentPage={currentPage}
                next={next}
                previous={previous}
              />
            </>
          ) : (
            <>
              <ViewCompletedTable remittance={currentPosts} />
              <CustomPagination
                paginate={paginate}
                totalPosts={post.length}
                postPerPage={postPerPage}
                currentPage={currentPage}
                next={next}
                previous={previous}
              />
            </>
          )}
        </div>
      </Widget>
    </>
  );
};

export default ViewCompleteAss;
