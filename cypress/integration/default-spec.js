import { key } from '../../src/apiCalls';

describe('default data', () => { 
  beforeEach(() => {
    cy
      .fixture('../fixtures/denverData.json')
      .then(data => {
        cy.intercept('GET', `https://api.airvisual.com/v2/nearest_city?key=${key}`, {
          statusCode: 200,
          body: data
        });
    });

    cy
      .visit('http://localhost:3000')
  });

  it('should render default data', () => {
    cy
      .get('body')
      .should('contain', 'Denver, Colorado')
      .should('contain', 'AQI')
      .should('contain', 'Temperature')
      .should('contain', 'Wind Speed')
      .should('contain', 'Humidity')
  });
});
