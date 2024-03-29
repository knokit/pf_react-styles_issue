import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import DocumentTitle from 'react-document-title';
import { PageSection, PageSectionVariants, Bullseye } from '@patternfly/react-core'
import Typeahead from '@app/Typeahead/Typeahead';
import '@app/app.css';

const App: React.FunctionComponent = () => {
  return (
    <DocumentTitle title="Patternfly React Seed | App Title">
      <Router>
        <AppLayout>

          <PageSection variant={PageSectionVariants.light}>
            <Bullseye>
              <Typeahead />
            </Bullseye>
          </PageSection>

          <AppRoutes />
        </AppLayout>
      </Router>
    </DocumentTitle>
  );
};

export { App };
