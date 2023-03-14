import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SliderContainer from '../SliderContainer';
import { ProductType } from '../../../services/shopping-cart/reducer/ProductReducer';


describe('SliderContainer', () => {
  test('should display the caption', () => {
    const { getByText } = render(
      <SliderContainer
        caption="Slider Caption"
        minimumValue={0}
        maximumValue={100}
        productName= {ProductType.Pantyliner}
      />
    );

    expect(getByText('Slider Caption')).toBeDefined();
  });

  test('should update the slider value on change', () => {
    const { getByTestId } = render(
      <SliderContainer
        caption="Slider Caption"
        minimumValue={0}
        maximumValue={100}
        productName={ProductType.SanitaryPad}
      />
    );

    const slider = getByTestId('slider');
    fireEvent.changeText(slider, '50');

    expect(slider.props.value).toEqual(50);
  });

  test('should call addToCart function when slider value is increased', () => {
    const addToCartMock = jest.fn();
    const { getByTestId } = render(
      <SliderContainer
        caption="Slider Caption"
        minimumValue={0}
        maximumValue={100}
        productName={ProductType.Tampon}
      />
    );

    const slider = getByTestId('slider');
    fireEvent.changeText(slider, '50');
    fireEvent.changeText(slider, '60');
    fireEvent.changeText(slider, '70');

    expect(addToCartMock).toHaveBeenCalledTimes(2);
  });

  test('should call removeFromCart function when slider value is decreased', () => {
    const removeFromCartMock = jest.fn();
    const { getByTestId } = render(
      <SliderContainer
        caption="Slider Caption"
        minimumValue={0}
        maximumValue={100}
        productName={ProductType.SuperPlusSanitaryPad}
      />
    );

    const slider = getByTestId('slider');
    fireEvent.changeText(slider, '50');
    fireEvent.changeText(slider, '40');
    fireEvent.changeText(slider, '30');

    expect(removeFromCartMock).toHaveBeenCalledTimes(2);
  });
});
