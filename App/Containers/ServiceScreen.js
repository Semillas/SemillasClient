// @flow

import React from 'react'
import PropTypes from 'prop-types';
import {
  Image,
  ActivityIndicator,
} from 'react-native'

import {
  Container,
  Content,
  Card,
  CardItem,
  Title,
  Text,
  Left,
  Toast,
  Right,
  Button,
  H2,
  Body
} from 'native-base'
import { connect } from 'react-redux'
import ServiceActions from '../Redux/ServiceRedux.js'
import ImageSwiper from '../Components/ImageSwiper'
import Price from '../Components/Price'

import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes/'
import CommonHeader from '../Components/CommonHeader'
// Styles
import styles from './Styles/ServiceScreenStyle'
import I18n from 'react-native-i18n'

class ServiceScreen extends React.Component {

  componentWillMount () {
    // TODO: Check if the service is not loaded.
    this.props.retrieveService(this.props.uuid)
  }

  renderCallToAction (service) {
    if ((this.props.loggedUser) && (this.props.loggedUser.uuid === service.author.uuid)) {
      return (
        <Button block
          onPress={() => {
            NavigationActions.editService({uuid: service.uuid})
          }}
        >
          <Text>{I18n.t('Edit')}</Text>
        </Button>
      )
    } else {
      return (
        <Button block
          onPress={() => {
            NavigationActions.user({uuid: service.author.uuid})
          }}
        >
          <Text>{I18n.t('Get it')}</Text>
        </Button>
      )
    }
  }

  handlePressDelete = () => {
    this.props.attemptServiceDelete(this.props.service.uuid)

    Toast.show({
      text: I18n.t('Offer Deleted'),
      position: 'bottom',
      buttonText: 'Okay'
    })

    NavigationActions.profile()
  }


  renderDeleteButton () {
    if ( (this.props.loggedUser) &&
      ((this.props.loggedUser.is_staff) ||
      (this.props.loggedUser.uuid == this.props.service.author.uuid))) {
      return (
        <Button
          block
          danger
          onPress={this.handlePressDelete}
        >
          <Text> {I18n.t('Delete Service')} </Text>
        </Button>
      )
    } else {
      return (<Content />)
    }
  }

  renderDistance (data) {
    if ((data.distance == 0) || (data.distance)) {
      return (<Text style={styles.distance}>{data.distance} km</Text>)
    } else {
      return (<Text />)
    }
  }

  render () {
    const { service } = this.props
    if (!service) {
      return (
        <Container style={styles.container}>
          <CommonHeader title={I18n.t('Loading Service')} />
          <ActivityIndicator />
        </Container>
      )
    } else {
      return (
        <Container>
          <CommonHeader title={I18n.t('Service')} />
          <Content padder>
            <Card>
              <CardItem>
                <ImageSwiper images={service.photos} />
              </CardItem>
              <CardItem>
                <Body>
                  <H2 selectable>{service.title}</H2>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Price data={service} />
                </Left>
                <Right>
                  <Text> {this.renderDistance(service)} </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text selectable>{service.description}</Text>
                </Body>
              </CardItem>

              <CardItem>
                <Body>
                  {this.renderCallToAction(service)}
                  {this.renderDeleteButton()}
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      )
    }
  }
}

ServiceScreen.propTypes = {
  uuid: PropTypes.string,
  requestService: PropTypes.func,
  service: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    uuid: ownProps.uuid,
    service: state.services.items[ownProps.uuid],
    loggedUser: state.login.user
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    attemptServiceDelete:
      (uuid) => dispatch(ServiceActions.serviceDeletionRequest(uuid)),
    retrieveService: (uuid) => dispatch(ServiceActions.serviceRequest(uuid)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceScreen)
