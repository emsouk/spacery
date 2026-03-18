describe('API Lieux', () => {
  it('GET /api/lieux should return 200', () => {
    cy.request('http://127.0.0.1:8000/api/lieux')
      .its('status')
      .should('eq', 200);
  });


  it('POST TEST UPDATED with full body', () => {
    // `Cypress.env()` est désactivé par `allowCypressEnv: false`, donc on utilise `cy.env()`.
    return cy.env(['API_BASE_URL']).then(({ API_BASE_URL }) => {
      const apiBaseUrl = API_BASE_URL || 'http://127.0.0.1:8000';
      const uniqueName = `Lieu test Cypress ${Date.now()}`;

      const basePayload = {
        nom: uniqueName,
        rue: '10 rue de test',
        code_postal: '13000',
        ville: 'Marseille',
        pays: 'France',
        // L’API attend un int (erreur: Expected "int", "string" given)
        lat_long: 1,
        payant: false,
        description: 'Lieu créé via Cypress pour test API.',
        image_lieu: 'https://example.com/lieu-test-cypress.jpg',
      };

      const postLieu = (body) =>
        cy.request({
          method: 'POST',
          url: `${apiBaseUrl}/api/lieux`,
          failOnStatusCode: false,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body,
        });

      // D’après les erreurs, l’API semble attendre `type_id` (pas `type`).
      return postLieu({ ...basePayload, type_id: 1 }).then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          throw new Error(
            `POST /api/lieux failed (${response.status}). Body: ${JSON.stringify(response.body)}`
          );
        }
      });
    });
  });
});
