import PropTypes from 'prop-types';
import React from 'react';
import beaker from '../svg/beaker.svgi';
import book from '../svg/book.svgi';
import browser from '../svg/browser.svgi';
import code from '../svg/code.svgi';
import globe from '../svg/globe.svgi';
import organization from '../svg/organization.svgi';
import info from '../svg/info.svgi';
import megaphone from '../svg/megaphone.svgi';
import project from '../svg/project.svgi';
import tools from '../svg/tools.svgi';
import question from '../svg/question.svgi';
import desktop from '../svg/desktop.svgi';
import smiley from '../svg/smiley.svgi';
import categoryList from '../pages/categories.json';
import get from 'lodash/get';
import find from 'lodash/find';
import Icon from './Icon.js';
import styled from '@emotion/styled';

let icons = {
  beaker,
  book,
  browser,
  code,
  globe,
  info,
  megaphone,
  project,
  tools,
  desktop,
  organization,
  smiley,
};

const iconWrapperBuilder = color =>
  styled.div({
    background: color,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: '0.5rem',
  });

class CategoryIcon extends React.Component {
  render() {
    let { category } = this.props;
    let categories = get(categoryList, 'categories', []);
    let selectedCategory = find(categories, { key: category });

    let icon = selectedCategory ? icons[selectedCategory.icon] : question;
    let IconWrapper = iconWrapperBuilder(
      selectedCategory ? selectedCategory.color : 'red'
    );
    return (
      <IconWrapper>
        <Icon icon={icon} color={'rgba(256,256,256,1)'} />
      </IconWrapper>
    );
  }
}

CategoryIcon.propTypes = {
  category: PropTypes.string.isRequired,
  includeText: PropTypes.bool.isRequired,
};

CategoryIcon.defaultProps = {
  includeText: true,
};

export default CategoryIcon;
