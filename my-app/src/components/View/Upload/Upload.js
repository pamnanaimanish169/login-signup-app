import React from 'react';
import Form from 'react-bootstrap/Form';
import './Upload.css';

class Upload extends React.Component    {
    constructor(props)  {
        super(props);

        this.handleChange   =   this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log('change event');

        console.log(event);

        let   fileInput    =   document.getElementById('file');
        let   filePath  =   fileInput.value;

        let allowedExtensions   =   /(\.csv)$/i;

        if(!allowedExtensions.exec(filePath))   {
            alert('Invalid file type');
            fileInput.value =   '';
            return  false;
        }   else    {
            alert('File Uploaded Successfully!');
            window.location.href    =   '/view';
        }
    }


    render()    {
        return(
            <div className='container'>
                <Form>
                    <Form.Group className="mb-3 upload-file">
                        <Form.Control id='file'  type="file" onChange={this.handleChange}/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Upload;