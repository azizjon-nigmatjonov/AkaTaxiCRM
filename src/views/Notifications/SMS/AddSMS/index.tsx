import AddNotification from "../../Notification/AddNotification";
const AddSMS = () => {

  const breadCrumbItems = [
    {
      label: "SMS xabarnoma",
      link: "/notifications/smsnotification",
    },
    {
      label: "SMS xabarnoma",
      link: "/notifications/smsnotification",
    },
    {
      label: "Yangi SMS xabar",
    },
  ];

  return (
    <>
      <AddNotification breadCrumbs={breadCrumbItems} type="sms" />
    </>
  );
};

export default AddSMS;
