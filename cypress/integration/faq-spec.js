import { key } from '../../src/apiCalls';

describe('the faq page', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/statesData.json')
      .then(data => {
        cy.intercept('GET', `http://api.airvisual.com/v2/states?country=USA&key=${key}`, {
          statusCode: 200,
          body: data
        });
      });

    cy
      .fixture('../fixtures/idCities.json')
      .then(data => {
        cy.intercept('GET', `http://api.airvisual.com/v2/cities?state=Idaho&country=USA&key=${key}`, {
          statusCode: 200,
          body: data
        });
      });

    cy
      .fixture('../fixtures/coCities.json')
      .then(data => {
        cy.intercept('GET', `http://api.airvisual.com/v2/cities?state=Colorado&country=USA&key=${key}`, {
          statusCode: 200,
          body: data
        });
      });

    cy
      .visit('http://localhost:3000');
  });

  it('should be able to return to the home page', () => {
    cy
      .get('a')
      .click()

      .get('img')
      .should('have.attr', 'src', '/static/media/AQI-chart.7b1ed9f0.jpg')

    cy
      .get('a')
      .click()

      .get('form')
      .should('exist')
  });

  it('should have a header', () => {
    cy
      .get('a')
      .click()

    cy
      .get('header')
      .should('contain', 'BreathEZ')

      .get('header a') 
      .should('contain', 'Home')
  });

  it('should have faq elements', () => {
    cy
      .get('a')
      .click()

      .get('img')
      .should('have.attr', 'src', '/static/media/AQI-chart.7b1ed9f0.jpg')

      .get('body')
      .should('contain', 'What is AQI')
      .should('contain', 'How does AQI work?')
      .should('contain', 'What are Pollutants?')
      .should('contain', 'Particulate matter')
      .should('contain', 'Difference in levels:')
      .should('contain', 'Mask Facts')
      .should('contain', 'Homemade Mask')
  });

  it('should be able to click on a collapsible', () => {
    cy
      .get('a')
      .click()

    cy
      .get('section')
      .children('div:first')
      .click()
      .children('span:first')
      .invoke('attr', 'class')
      .should('contain', 'is-open')
  });
});
