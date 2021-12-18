// import React from "react";
// // node.js library that concatenates classes (strings)
// import classnames from "classnames";
// // javascipt plugin for creating charts

// // react plugin used to create charts
// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   NavItem,
//   NavLink,
//   Nav,
//   Progress,
//   Table,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// // layout for this page


// import Header from "components/Headers/Header.js";

// const Dashboard = (props) => {
//   const [activeNav, setActiveNav] = React.useState(1);


//   const toggleNavs = (e, index) => {
//     e.preventDefault();
//     setActiveNav(index);
//     setChartExample1Data("data" + index);
//   };
//   return (
//     <>
//       <Header />
//       {/* Page content */}
//       <Container className="mt--7" fluid>
//         <Row>
//           <Col className="mb-5 mb-xl-0" xl="8">
//             <Card className="shadow">
//               <CardHeader className="bg-transparent">
//                 <Row className="align-items-center">
                  
//                 </Row>
//               </CardHeader>
//             </Card>
//           </Col>
//           <Col xl="4">
//             <Card className="shadow">
//               <CardHeader className="bg-transparent">
//                 <Row className="align-items-center">
//                   <div className="col">
//                     <h6 className="text-uppercase text-muted ls-1 mb-1">
//                       Performance
//                     </h6>
//                     <h2 className="mb-0">Total orders</h2>
//                   </div>
//                 </Row>
//               </CardHeader>
//               <CardBody>
//                 {/* Chart */}
//                 <div className="chart">

//                 </div>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//         <Row className="mt-5">
//           <Col className="mb-5 mb-xl-0" xl="8">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <Row className="align-items-center">
//                   <div className="col">
//                     <h3 className="mb-0">Page visits</h3>
//                   </div>
//                 </Row>
//               </CardHeader>
//             </Card>
//           </Col>
//           <Col xl="4">
//             <Card className="shadow">
//                 {/* Social Traffic */}
//               <CardHeader className="border-0">
//                 <Row className="align-items-center">
//                   <div className="col">
//                     <h3 className="mb-0">Social traffic</h3>
//                   </div>
//                   <div className="col text-right">
//                     <Button
//                       color="primary"
//                       href="#pablo"
//                       onClick={(e) => e.preventDefault()}
//                       size="sm"
//                     >
//                       See all
//                     </Button>
//                   </div>
//                 </Row>
//               </CardHeader>

//               <Table className="align-items-center table-flush" responsive>
//                 <thead className="thead-light">
//                   <tr>
//                     <th scope="col">Referral</th>
//                     <th scope="col">Visitors</th>
//                     <th scope="col" />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">Facebook</th>
//                     <td>1,480</td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">60%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="60"
//                             barClassName="bg-gradient-danger"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">Facebook</th>
//                     <td>5,480</td>
//                     <td>
//                       <div className="d-flex align-items-center">
//                         <span className="mr-2">70%</span>
//                         <div>
//                           <Progress
//                             max="100"
//                             value="70"
//                             barClassName="bg-gradient-success"
//                           />
//                         </div>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// Dashboard.layout = Admin;

// export default Dashboard;
