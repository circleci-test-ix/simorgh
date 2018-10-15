import React from 'react';
import { Link } from 'react-router-dom';
import InlineLink from '../../components/InlineLink';
import Blocks from '../Blocks';
import fragment from '../Fragment';
import { inlineLinkModelPropTypes } from '../../models/propTypes/inlineLink';

const InternalInlineLink = InlineLink.withComponent(Link);

const componentsToRender = { fragment };

const InlineLinkContainer = ({ locator, blocks }) => {
  const schemeHostPrefix = 'https://www(.int|.test|.stage|).bbc.(co.uk|com)';
  const regex = RegExp(`^${schemeHostPrefix}/news/articles/c[a-zA-Z0-9]{10}o$`);

  // if URL matches a valid route, use a react-router link
  if (locator.match(regex)) {
    const internalLocator = locator.replace(RegExp(schemeHostPrefix), '');

    return (
      <InternalInlineLink to={internalLocator}>
        <Blocks blocks={blocks} componentsToRender={componentsToRender} />
      </InternalInlineLink>
    );
  }

  // else return a normal hyperlink
  return (
    <InlineLink href={locator}>
      <Blocks blocks={blocks} componentsToRender={componentsToRender} />
    </InlineLink>
  );
};

InlineLinkContainer.propTypes = inlineLinkModelPropTypes;

export default InlineLinkContainer;
