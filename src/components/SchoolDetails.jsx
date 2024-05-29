import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';
import SchoolInvoices from './School/SchoolInvoices';
import Collections from './School/Collections';

const SchoolDetails = () => {
  const location = useLocation();
  const { school } = location.state;
  const invoices = [{
    "id": 1,
    "invoiceNumber": "INV001",
    "invoiceItem": "Zeraki Finance",
    "creationDate": "2024-05-01",
    "dueDate": "2024-06-01",
    "amount": 10000,
    "amountPaid": 0,
    "balance": 10000,
    "completionStatus": false,
    "daysUntilDue": 3,
    "client": "Greenwood Secondary School"
  },
  {
    "id": 2,
    "invoiceNumber": "INV002",
    "invoiceItem": "Zeraki Timetable",
    "creationDate": "2024-05-05",
    "dueDate": "2024-06-05",
    "amount": 12000,
    "amountPaid": 0,
    "balance": 12000,
    "completionStatus": true,
    "daysUntilDue": 7,
    "client": "Sunrise Primary School"
  }]

  const collections = [
    {
      "id": 1,
      "invoiceNumber": "INV001",
      "collectionNumber": "COL001",
      "dateOfCollection": "2024-06-01",
      "status": "Valid",
      "amount": 5000,
      "client": "Greenwood Secondary School"
    },
    {
      "id": 2,
      "invoiceNumber": "INV002",
      "collectionNumber": "COL002",
      "dateOfCollection": "2024-06-05",
      "status": "Valid",
      "amount": 8000,
      "client": "Sunrise Primary School"
    }]

  return (
    <>
      <Layout>
        <div className="p-4">
          <h1 className='font-bold text-xl text-black mb-4'>{school.name}</h1>
          <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
              <p>Type: <span className="font-semibold">{school.type}</span></p>
              <p>County: <span className="font-semibold my-1">{school.county}</span></p>
              <p>Joined: <span className="font-semibold">{school.registrationDate}</span></p>
              <p>Contact: <span className="font-semibold my-1">{school.contact}</span></p>
              <p>Balance: <span className="font-semibold">{school.schoolBalance}</span></p>
            </div>
            <div className="flex-1">
              <h3 className='font-bold'>PRODUCTS</h3>
              {school.products.map((prod, index) => (
                <p key={index}><span className="font-semibold">{prod}</span></p>
                ))}
            </div>
          </div>
          
          <div className="invoices py-2">
            <div className="mb-2 text-2xl text-blue-400">Invoices</div>
            <SchoolInvoices schoolInvoices={invoices}/>
          </div>

          <div className="collections py-2">
            <div className="mb-2 text-2xl text-blue-400">Collections</div>
            <Collections collections={collections}/>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SchoolDetails;
