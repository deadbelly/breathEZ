describe('the main view', () => { 
  beforeEach(() => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', 'http://api.airvisual.com/v2/states?country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6', {
          statusCode: 200,
          body: data
        });
      });

    cy
      .fixture('../fixtures/idCities.json')
      .then(data => {
        cy.intercept('GET', 'http://api.airvisual.com/v2/cities?state=Idaho&country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6', {
          statusCode: 200,
          body: data
        });
      });

    cy
      .fixture('../fixtures/coCities.json')
      .then(data => {
        cy.intercept('GET', 'http://api.airvisual.com/v2/cities?state=Colorado&country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6', {
          statusCode: 200,
          body: data
        });
      });

    cy
      .visit('http://localhost:3000');
  });

  it('should show Colorado and Idaho as states', () => {
    cy
      .get('form')
      .children('select:first')
      .select('Colorado')
      .should('have.value', 'Colorado')

      .get('form')
      .children('select:first')
      .select('Idaho')
      .should('have.value', 'Idaho')
  });

  it('should be able to select Denver when Colorado is selected', () => {
    cy
      .get('form')
      .children('select:first')
      .select('Colorado')
      .should('have.value', 'Colorado')

      .get('form')
      .children('select:nth-child(2)')
      .select('Denver')
      .should('have.value', 'Denver')
  });
});