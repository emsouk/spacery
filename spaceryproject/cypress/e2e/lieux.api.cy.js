describe('API Lieux (smoke)', () => {
  const getApiBaseUrl = () =>
    cy.env(['API_BASE_URL']).then(({ API_BASE_URL }) => API_BASE_URL || 'http://127.0.0.1:8000');

  const toLieuxArray = (body) => {
    if (Array.isArray(body)) return body;
    if (body && Array.isArray(body['hydra:member'])) return body['hydra:member'];
    return [];
  };

  const createLieu = (apiBaseUrl, overrides = {}) => {
    const uniqueName = `Lieu Cypress ${Date.now()}`;

    return cy.request({
      method: 'POST',
      url: `${apiBaseUrl}/api/lieux`,
      failOnStatusCode: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        nom: uniqueName,
        rue: '10 rue de test',
        code_postal: '13000',
        ville: 'Marseille',
        pays: 'France',
        lat_long: 1,
        payant: false,
        description: 'Lieu créé via Cypress.',
        image_lieu: 'https://example.com/lieu-cypress.jpg',
        type_id: 1,
        ...overrides,
      },
    });
  };

  it('GET /api/lieux returns 200 + JSON', () => {
    return getApiBaseUrl().then((apiBaseUrl) => {
      return cy
        .request(`${apiBaseUrl}/api/lieux`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.headers['content-type'] || '').to.contain('application/json');
        });
    });
  });

  it('GET /api/lieux returns an array (or hydra:member)', () => {
    return getApiBaseUrl().then((apiBaseUrl) => {
      return cy.request(`${apiBaseUrl}/api/lieux`).then((response) => {
        const lieux = toLieuxArray(response.body);
        expect(lieux).to.be.an('array');
      });
    });
  });

  it('GET /api/lieux/:id returns 200 for an existing lieu', () => {
    return getApiBaseUrl().then((apiBaseUrl) => {
      return cy.request(`${apiBaseUrl}/api/lieux`).then((getResp) => {
        const lieux = toLieuxArray(getResp.body);

        const getId = () => {
          const first = lieux[0];
          return first?.id ?? first?.['@id']?.split('/').pop();
        };

        const id = getId();

        if (id) {
          return cy.request(`${apiBaseUrl}/api/lieux/${id}`).its('status').should('eq', 200);
        }

        return createLieu(apiBaseUrl).then((postResp) => {
          expect([200, 201]).to.include(postResp.status);
          const createdId = postResp.body?.id ?? postResp.body?.lieu?.id;
          expect(createdId, 'created id').to.exist;
          return cy.request(`${apiBaseUrl}/api/lieux/${createdId}`).its('status').should('eq', 200);
        });
      });
    });
  });

  it('POST /api/lieux creates a lieu (201)', () => {
    return getApiBaseUrl().then((apiBaseUrl) => {
      return createLieu(apiBaseUrl).then((response) => {
        expect([200, 201]).to.include(response.status);
        const createdId = response.body?.id ?? response.body?.lieu?.id;
        expect(createdId, 'created id').to.exist;

        // Nettoyage best-effort (ne fait pas échouer le test si l’API refuse le DELETE)
        return cy
          .request({
            method: 'DELETE',
            url: `${apiBaseUrl}/api/lieux/${createdId}`,
            failOnStatusCode: false,
          })
          .then(() => undefined);
      });
    });
  });

  it('POST /api/lieux without required fields returns 400', () => {
    return getApiBaseUrl().then((apiBaseUrl) => {
      return cy
        .request({
          method: 'POST',
          url: `${apiBaseUrl}/api/lieux`,
          failOnStatusCode: false,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: {},
        })
        .its('status')
        .should('eq', 400);
    });
  });
});

