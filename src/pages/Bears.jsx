import React from 'react'
import { useStoreBear } from '../store/Store'
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from "google-spreadsheet";
require('dotenv').config();

const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const Bears = () => {
    const appendSpreadsheet = async () => {
        try {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            // loads document properties and worksheets
            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0];

            const rows = await sheet.getRows();
            console.log(rows.map((v) => v._rawData));
            // const result = await sheet.addRow(row);
        } catch (e) {
            console.error('Error: ', e);
        }
    };

    appendSpreadsheet()

    const { bears, AddBear, removeAllBears } = useStoreBear()
    return (
        <div>
            <h1>%SPREADSHEET_ID%</h1>
            <h3>Bears : {bears}</h3>
            <button onClick={AddBear}>Add Bear</button>
            <button onClick={removeAllBears}>Remove All Bears</button>
        </div>
    )
}

export default Bears;