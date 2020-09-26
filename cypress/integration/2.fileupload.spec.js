describe ('My second test', ()=> {
    it('should upload a file from fixtures folder',() =>{

        cy.visit("http://cgi-lib.berkeley.edu/ex/fup.html")

   //File Upload
    const filename = 'SampleFile.pdf';
    cy.fixture(filename).then(fileContent => 
        {
            //Now command attachFile is replaced instead of upload command
            cy.get('[type="file"]').attachFile ({ fileContent, filename , mimeType :'application/pdf'});

        })
        cy.get('[type="Submit"]').click()
        cy.contains("You've uploaded a file. Your notes on the file were:")
    })
})