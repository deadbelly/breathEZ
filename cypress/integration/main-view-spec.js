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

  it('should be able to move to the faq page', () => { 
    cy
      .get('a')
      .click()

      .get('img')
      .should('have.attr', 'src', '/static/media/AQI-chart.7b1ed9f0.jpg')
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
  })

  it('should not have data upon page load', () => {
    cy
      .get('body')
      .should('not.contain', 'AQI')
      .should('not.contain', 'Temperature')
      .should('not.contain', 'Wind Speed')
      .should('not.contain', 'Humidity')

      .get('img')
      .should('not.exist')
  });

  it('should not have data upon only picking a state', () => {
    cy
      .get('form')
      .children('select:first')
      .select('Colorado')
      .should('have.value', 'Colorado')

      .get('form')
      .children('select:first')
      .select('Idaho')
      .should('have.value', 'Idaho')

      .get('body')
      .should('not.contain', 'AQI')
      .should('not.contain', 'Temperature')
      .should('not.contain', 'Wind Speed')
      .should('not.contain', 'Humidity')

      .get('img')
      .should('not.exist')
  });

  it('should have data when both state and city picked', () => {
    cy
      .get('form')
      .children('select:first')
      .select('Colorado')
      .should('have.value', 'Colorado')

      .get('form')
      .children('select:nth-child(2)')
      .select('Denver')
      .should('have.value', 'Denver')

      .get('body')
      .should('contain', 'AQI')
      .should('contain', 'Temperature')
      .should('contain', 'Wind Speed')
      .should('contain', 'Humidity')
  });

  it('should keep data if went to faq and back', () => {
    cy
      .get('form')
      .children('select:first')
      .select('Colorado')
      .should('have.value', 'Colorado')

      .get('form')
      .children('select:nth-child(2)')
      .select('Denver')
      .should('have.value', 'Denver')

      .get('body')
      .should('contain', 'AQI')
      .should('contain', 'Temperature')
      .should('contain', 'Wind Speed')
      .should('contain', 'Humidity')

      .get('a')
      .click()

      .get('img')
      .should('have.attr', 'src', '/static/media/AQI-chart.7b1ed9f0.jpg')

      .get('a')
      .click()

      .get('body')
      .should('contain', 'AQI')
      .should('contain', 'Temperature')
      .should('contain', 'Wind Speed')
      .should('contain', 'Humidity')
  });
});
