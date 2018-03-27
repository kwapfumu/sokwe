import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Col, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

const AdminIgisokozoPanel = (props) => (
  <Panel id="collapsible-panel-AdminIgisokozoPanel" defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        <Col sm={10} md={10} lg={10}>{props.aSokozo.igisokozo}</Col>
        <Col sm={2} md={2} lg={2}>
          <ButtonToolbar>
            <Button bsStyle="warning" bsSize="small" onClick={props.handleClickEditSokozo}>
              <Glyphicon glyph="edit" />
            </Button>
            <Button bsStyle="danger" bsSize="small" onClick={props.handleClickDeleteSokozo}>
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
        </Col>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        {props.aSokozo.inyishu}
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

AdminIgisokozoPanel.propTypes = {
  aSokozo: PropTypes.shape({
    igisokozo: PropTypes.string.isRequired,
    inyishu: PropTypes.string.isRequired,
  }).isRequired,
  handleClickEditSokozo: PropTypes.func.isRequired,
  handleClickDeleteSokozo: PropTypes.func.isRequired,
};
export default AdminIgisokozoPanel;
