import React from 'react';
import { SubscribeBlock } from './SubscribeBlock';
import glamorous from 'glamorous';

const SubscribeRow = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '60% 35%',
  gridColumnGap: '5%',
  gridTemplateRows: '1fr',
});

export class EmailSubscribe extends React.Component {
  render() {
    /* eslint-disable no-inline-comments */
    return (
      <SubscribeBlock>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/benmccormick"
          method="post"
          target="popupwindow"
          onSubmit="window.open('https://buttondown.email/benmccormick', 'popupwindow')"
          className="embeddable-buttondown-form"
        >
          <label htmlFor="bd-email" id="bd-label">
            Subscribe to the Newsletter
          </label>
          <input type="hidden" value="1" name="embed" />
          <SubscribeRow>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="Your Email"
            />
            <input type="submit" value="Subscribe" id="bd-submit" />
          </SubscribeRow>
        </form>
      </SubscribeBlock>
    );
  }
}
