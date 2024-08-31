import Table from "rc-table";
import FilterIcon from "../../assets/svg/filterIcon";
import "./index.scss";
import ServiceCell from "./serviceCell";

const TransactionHistory = () => {
  const columns = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: 200,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 100,
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "total",
      width: 200,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Payment Method",
      dataIndex: "payment",
      key: "payment",
      width: 200,
    },
    {
      title: "Transaction No",
      dataIndex: "transaction",
      key: "transaction",
      width: 300,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <button
          style={{
            padding: 5,
            borderRadius: 6,
            background: "rgba(239, 243, 251, 1)",
            fontSize: 16,
            color: "rgba(65, 105, 225, 1)",
            border: "none",
            cursor: "pointer",
          }}
        >
          Open
        </button>
      ),
    },
  ];

  const data = [
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
    {
      service: <ServiceCell text="Mtn Airtime VTU" no={"09068562949"} />,
      amount: "₦100.00",
      total: "₦100.00",
      status: <span style={{ color: "rgba(255, 181, 71, 1)" }}>Initiated</span>,
      payment: "Wallet",
      transaction: (
        <>
          <p>17045621860850336938179613</p>
          <p>6th January, 2024, 06:29PM</p>
        </>
      ),
    },
  ];

  return (
    <div className="transaction_history">
      <div className="filer">
        <FilterIcon />
        <span>Filter</span>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};
export default TransactionHistory;
