import Form from "./form";
// centerName: {
//             type: Sequelize.STRING
//         },
//         contactPerson: {
//             type: Sequelize.STRING
//         },
//         address: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         phone: {
//             type: Sequelize.STRING
//         },
//         operatingHours: {
//             type: Sequelize.STRING
//         },
//         latitude: {
//             type: Sequelize.STRING
//         },
//         longitude: {
//             type: Sequelize.STRING
//         },
//         acceptedItems: {
//             type: Sequelize.STRING
//         },
//         serviceOffered: {
//             type: Sequelize.STRING
//         },
//         images: {
//             type: Sequelize.STRING
//         },
//         password: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },

export default function collectorSignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up for E-waste collector account
        </h2>
      </div>
      <Form />
    </div>
  );
}
