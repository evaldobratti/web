import React from 'react';
import Form from './Form';
import FormField from './FormField';
import FormGroup from './FormGroup';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
import styles from './TableFilterForm.css';
import * as data from './TableFilter.config';
import { connect } from 'react-redux';
import { submitForm, clearForm } from '../../actions';

const TableFilterForm = ({ submitForm, clearForm }) => (
  <Form name="tableFilter" className={styles.form}>
    <FormGroup className={styles.formGroup}>
      <FormField
        name="with_hero_id"
        label="your team had these heroes"
        dataSource={data.heroList}
        dataSourceConfig={data.heroConfig}
        strict
      />
      <FormField
        name="against_hero_id"
        label="their team had these heroes"
        dataSource={data.heroList}
        dataSourceConfig={data.heroConfig}
        strict
      />
      <FormField
        name="included_account_id"
        label="included these players"
      />
      <FormField
        name="excluded_account_id"
        label="excluded these players"
      />
    </FormGroup>
    <FormGroup className={styles.formGroup}>
      <FormField
        name="hero_id"
        label="your hero"
        dataSource={data.heroList}
        dataSourceConfig={data.heroConfig}
        strict
      />
      <FormField
        name="is_radiant"
        label="faction"
        dataSource={data.factionList}
        dataSourceConfig={data.genericConfig}
        strict
      />
      <FormField
        name="win"
        label="result"
        dataSource={data.resultList}
        dataSourceConfig={data.genericConfig}
        strict
      />
      <FormField
        name="lane_role"
        label="lane"
        dataSource={data.laneList}
        dataSourceConfig={data.genericConfig}
        strict
      />
    </FormGroup>
    <FormGroup className={styles.formGroup}>
      <FormField
        name="patch"
        label="patch"
        dataSource={data.patchList}
        dataSourceConfig={data.genericConfig}
        maxSearchResults={100}
        strict
      />
      <FormField
        name="game_mode"
        label="game mode"
        dataSource={data.modeList}
        dataSourceConfig={data.genericConfig}
        maxSearchResults={100}
        strict
      />
      <FormField
        name="lobby_type"
        label="lobby type"
        dataSource={data.lobbyTypeList}
        dataSourceConfig={data.genericConfig}
        maxSearchResults={100}
        strict
      />
      <FormField
        name="date"
        label="date"
        dataSource={data.dateList}
        dataSourceConfig={data.genericConfig}
        strict
        limit={1}
      />
      <FormField
        name="region"
        label="region"
        dataSource={data.regionList}
        dataSourceConfig={data.genericConfig}
        strict
      />
    </FormGroup>
    <FormGroup className={styles.formGroup}>
      <FormField
        name="limit"
        label="number of matches"
        limit={1}
      />
    </FormGroup>
    <div className={styles.buttonContainer}>
      <ClearButton label="reset the thing" clearForm={clearForm} style={{ marginRight: 10 }} />
      <SubmitButton label="do the thing" submitForm={submitForm} />
    </div>
  </Form>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitForm: () => dispatch(submitForm(ownProps.submitAction.bind(null, ownProps.id), 'tableFilter')),
  clearForm: () => dispatch(clearForm('tableFilter')),
});

export default connect(null, mapDispatchToProps)(TableFilterForm);
