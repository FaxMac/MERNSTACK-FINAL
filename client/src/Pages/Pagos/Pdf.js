import React from "react";

function ViewPdf() {

        return(
            <div>
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <object
                data={require('./factura.pdf')}
                type="application/pdf"
                width="60%"
                height="100%"
                >

                </object>

            </div>
            </div>
        );
}

export default ViewPdf;