import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import csv from 'csv';
import { useDropzone } from 'react-dropzone';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
// import firebase from '../../services/firebase';

function MyDropzone(props) {
  const { setFile, setParsed, setParsedData } = props;
  const [dropzoneError, setDropzoneError] = useState('');
  const onDrop = useCallback((acceptedFiles) => {
    console.log('accfiles', acceptedFiles);
    // Do something with the files
    acceptedFiles.forEach((file) => {
      if (!file.name.match(/.csv$/i)) {
        setDropzoneError('!!! Only CSV files are accepted.');
        setFile('');
        setTimeout(() => {
          setDropzoneError('');
        }, 3000);
        Promise.reject('Only csv files are accepted.');
        return;
      }
      setFile(`${file.name}`);

      console.log(file);
      const reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
          if (err) {
            console.log('csv error', err);
            return;
          }
          var dataList = [];
          let dataObject = {};
          for (var i = 1; i < data.length; i++) {
            for (var j = 0; j < data[0].length; j++) {
              dataObject = {
                ...dataObject,
                [data[0][j]]: data[i][j],
              };
            }

            // let pid = dataObject.productcode.match(/.*?([0-9]+)$/);
            // let picture =
            //   pid && pid.toString()
            //     ? 'EU' +
            //       pid
            //         .toString()
            //         .replace(`${dataObject.productcode}`, '')
            //         .replace(',', '') +
            //       '.jpg'
            //     : '';
            // dataObject.picture = picture;

            dataList.push({ dataObject });
          }
          console.log('datalist', dataList);
          setParsed(true);
          setParsedData(dataList);

          // let jsonData = JSON.stringify(dataList);
          // function download(content, fileName, contentType) {
          //   var a = document.createElement('a');
          //   var file = new Blob([content], { type: contentType });
          //   a.href = URL.createObjectURL(file);
          //   a.download = fileName;
          //   a.click();
          // }
          // download(jsonData, 'json.txt', 'text/plain');

          dataList = [];
        });
      };
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className="dropzone-container">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <p style={{ color: 'red' }}>{dropzoneError}</p>
          <p>Drag and drop or click to select files</p>
        </>
      )}
    </div>
  );
}
const ImportModal = (props) => {
  const { setShowModal } = props;
  const [file, setFile] = useState('');
  const [parsed, setParsed] = useState(false);
  const [parsedData, setParsedData] = useState(false);

  // const importData = () => {};
  // let prodid = 'asdfg';
  // prodid.slice(0,prodid.length -4)
  const importData = async () => {
    // console.log('parseddata', parsedData);
    // let json = {};
    // // let batch = firebase.firestore().batch();
    // for (let i = 0; i < 4; i++) {
    //   let productid = parsedData[i].dataObject.productcode;
    //   // let docref = firebase.firestore().collection('products').doc(productid);
    //   // batch.set(docref, parsedData[i].dataObject);
    //   let newDataobj = parsedData[i].dataObject;
    //   let len = productid.length;
    //   newDataobj.picture = 'EU' + productid.slice(len - 4, len) + '.jpg';
    //   json = {
    //     ...json,
    //     [productid]: newDataobj,
    //   };
    // }
    // console.log(json);
    // batch
    //   .commit()
    //   .then((res) => {
    //     console.log('success');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  console.log('files', file);
  return (
    <div>
      <div className="import-modal">
        <div className="import-modal-wrapper">
          <br />
          <div className="modal-header">
            <div className="modal-title">
              <p>Import products by CSV</p>
            </div>
            <div className="modal-close-button">
              <p onClick={() => setShowModal(false)}>
                <Icon path={mdiClose} size={1} />
              </p>
            </div>
          </div>
          <br />
          <div className="line" style={{ marginBottom: 'auto' }}></div>
          <div className="modal-body">
            <div className="modal-intro">
              <p>
                Download a <Link to="/">sample CSV template</Link> to see an
                example of the format required.
              </p>
            </div>
            <div
              className="modal-input"
              // align="center"
              onContextMenu={() => {
                return false;
              }}
            >
              <div className="dropzone">
                {file ? (
                  <>
                    <p>File: {file}</p>
                    <p>
                      {parsed
                        ? 'Parsed: ' + parsedData.length + ' rows.'
                        : 'Parsing and formatting the file. Please WAIT..'}
                    </p>
                  </>
                ) : (
                  <MyDropzone
                    setFile={setFile}
                    setParsed={setParsed}
                    setParsedData={setParsedData}
                  />
                )}
              </div>
            </div>
            <div className="modal-checkbox">
              <div className="form-group-row-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  Overwrite any current products that have the same handle.
                  Existing values will be used for any missing columns.
                  <Link to="/">Learn more</Link>
                </label>
              </div>
            </div>
          </div>
          <div className="line" style={{ marginTop: 'auto' }}></div>
          <br />
          <div className="modal-footer">
            <div className="modal-help">
              <Link to="/">Need help importing products?</Link>
            </div>
            <div className="modal-buttons">
              <button
                onClick={() => {
                  setShowModal(false);
                  setFile('');
                  setParsed(false);
                  setParsedData(false);
                }}
              >
                Cancel
              </button>
              <button
                disabled={file && parsed ? false : true}
                onClick={importData}
              >
                Import
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
