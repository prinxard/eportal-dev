import Widget from "../widget";
import { formatNumber } from "../../functions/numbers";
import * as Icons from '../Icons/index';
import Widget1 from "../dashboard/widget-1";
import dateformat from "dateformat";
import Link from 'next/link';

const fields = [
  {
    name: "Assesment Id",
    key: "assessment_id",
  },
  {
    name: "Year",
    key: "year",
  },
  {
    name: "KGTIN",
    key: "kgtin",
  },
  {
    name: "Name",
    key: "tp_name",
  },
  {
    name: "Employed Tax",
    key: "employed_tax",
  },
  {
    name: "Self Employed Tax",
    key: "self_employed_tax",
  },
  {
    name: "Status",
    key: "status",
  },
  {
    name: "Created Time",
    key: "createtime",
  },

];

export const ViewCompletedTable = ({ remittance, totalemployees, totaltax, grosssum }) => {
  let items = remittance;
  // console.log(remittance)
  remittance.map((remittance) => {
    remittance["amount"] = formatNumber(remittance["amount"]);
    if (remittance["status"] === 1) {
      remittance["status"] = "success";
    } else if (remittance["status"] === 0) {
      remittance["status"] = "failed";
    }
    return remittance;
  });

  return (
    <>
      <Widget>
        <table className="table divide-y">
          <thead>
            <tr className="">
              {fields.map((field, i) => (
                <th key={i} className="">
                  {field.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {items.map((remittance, i) => (
              <tr key={i} className="">
                {fields.map((field, j) => (
                  <td key={j} className="">
                    {/* {remittance[field.key]} */}
                    <Link href={`/view/completeddirect/${remittance.assessment_id}`}>
                      <a className="hover:text-blue-500">
                        {remittance[field.key]}
                      </a>
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Widget>
    </>
  );
};

const singleFields = [
  // { name: 'Status', key: 'status' },

  {
    name: 'Staff Name',
    key: 'staff_names',
  },
  {
    name: 'Number of months',
    key: 'no_months',
  },
  {
    name: 'Basic Salary',
    key: 'basic_salary',
  },
  {
    name: 'CONSOLIDATED RELIEF ALLOWANCE',
    key: 'con_rel_cal',
  },
  {
    name: 'Pension',
    key: 'pension',
  },
  {
    name: 'NHIS',
    key: 'nhis',
  },

  {
    name: 'LAP',
    key: 'lap',
  },

  {
    name: 'Net Tax Deducted',
    key: 'net_tax_ded',
  },
  {
    name: 'Expected Tax',
    key: 'tax_pay_cal',
  },
  {
    name: 'Variance',
    key: 'variance_cal',
  },

  {
    name: 'Year',
    key: 'year',
  },
];

export const ViewSingleCompletedTable = ({ payerprop}) => {
  const items = payerprop;
  console.log(payerprop.asset.acquired_date);

  return (
    <>
      <Widget>
        <div className="flex justify-end">
          <button
            className="btn btn-default bg-green-600 text-white mr-4 btn-outlined bg-transparent rounded-md"
            type="submit"
          >
            Approve Assessment
          </button>
          <button
            className="btn bg-red-600	btn-default text-white btn-outlined bg-transparent rounded-md"
            type="submit"
          >
            Decline Assessment
          </button>
        </div>
        <div className="block p-6 rounded-lg bg-white w-full">
          <div className="flex">
            <h6 className="p-2">Taxpayer Information</h6>
          </div>
          <p className="mb-3 font-bold"></p>
          <form>
            <div className="grid grid-cols-3 gap-4">

              <div className="">
                <p>Surname</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>First Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Middle Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Title</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Date of Birth</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
              <div className="form-group mb-6">
                <p>Phone number</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Tax Office</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Email</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
          </form>
        </div>

      </Widget>

      <Widget>
        <div className="block p-6 rounded-lg bg-white w-full">
          <div className="flex">
            <h6 className="p-2">Income Information</h6>
          </div>
          <p className="mb-3 font-bold"></p>
          <form>
            <div className="grid grid-cols-3 gap-4">

              <div className="">
                <p>Surname</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>First Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Middle Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Title</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Date of Birth</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
              <div className="form-group mb-6">
                <p>Phone number</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Tax Office</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Email</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
          </form>
        </div>
      </Widget>

      <Widget>
        <div className="block p-6 rounded-lg bg-white w-full">
          <div className="flex">
            <h6 className="p-2">Deductions Information</h6>
          </div>
          <p className="mb-3 font-bold"></p>
          <form>
            <div className="grid grid-cols-3 gap-4">

              <div className="">
                <p>Surname</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>First Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Middle Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Title</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Date of Birth</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
              <div className="form-group mb-6">
                <p>Phone number</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Tax Office</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Email</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
          </form>
        </div>
      </Widget>

      <Widget>
        <div className="block p-6 rounded-lg bg-white w-full">
          <div className="flex">
            <h6 className="p-2">Other Asset Information</h6>
          </div>
          <p className="mb-3 font-bold"></p>
          <form>
            <div className="grid grid-cols-3 gap-4">

              <div className="">
                <p>Surname</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>First Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Middle Name</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Title</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Date of Birth</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
              <div className="form-group mb-6">
                <p>Phone number</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <p>Tax Office</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>

              <div className="form-group mb-6">
                <p>Email</p>
                <input type="text" className="form-control w-full rounded"
                  disabled />
              </div>
            </div>
          </form>
        </div>
      </Widget>
    </>
  );
};