import { key } from '../../src/apiCalls';

describe('403 errors', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', `https://api.airvisual.com/v2/states?country=USA&key=${key}`, {
          statusCode: 403
        });
    });

    cy
      .visit('http://localhost:3000') 
  });

  it('should render', () => {
    cy
      .get('body')
      .should('contain', '403')
      .should('contain', 'Forbidden')
  });
});

describe('404 errors', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', `https://api.airvisual.com/v2/states?country=USA&key=${key}`, {
          statusCode: 404
        });
    });

    cy
      .visit('http://localhost:3000') 
  });

  it('should render', () => {
    cy
      .get('body')
      .should('contain', '404')
      .should('contain', 'Not Found')
  });
});

describe('501 errors', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', `https://api.airvisual.com/v2/states?country=USA&key=${key}`, {
          statusCode: 501
        });
    });

    cy
      .visit('http://localhost:3000') 
  });

  it('should render', () => {
    cy
      .get('body')
      .should('contain', '501')
      .should('contain', 'Not Implemented')
  });
});

describe('504 errors', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', `https://api.airvisual.com/v2/states?country=USA&key=${key}`, {
          statusCode: 504
        });
    });

    cy
      .visit('http://localhost:3000') 
  });

  it('should render', () => {
    cy
      .get('body')
      .should('contain', '504')
      .should('contain', 'Gateway Timeout')
  });
});
