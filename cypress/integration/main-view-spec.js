describe('the main view', () => { 
  it('should visit the page with stub data', () => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', 'http://api.airvisual.com/v2/states?country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6', {
          statusCode: 200,
          body: data
        });
      });

    cy
      .visit('http://localhost:3000');
  });

  it('should show Colorado and Idaho as states', () => {
  });

  it('should be able to select Denver when Colorado is selected', () => {
    cy
      .fixture('../fixtures/coCities.json')
      .then(data => {
        cy.intercept('GET', 'http://api.airvisual.com/v2/cities?state=Colorado&country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6', {
          statusCode: 200,
          body: data
        });
      });

  });
});
