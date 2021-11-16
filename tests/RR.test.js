/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../client/src/App.jsx';
import RROverview from '../client/src/components/R&R/RROverview.jsx';
import Ratings from '../client/src/components/R&R/Ratings.jsx';
import Reviews from '../client/src/components/R&R/Reviews.jsx';
import Characteristics from '../client/src/components/R&R/Characteristics.jsx';
import ReviewsSort from '../client/src/components/R&R/ReviewsSort.jsx';
import ReviewsList from '../client/src/components/R&R/ReviewsList.jsx';
import ReviewTile from '../client/src/components/R&R/ReviewTile.jsx';
import MoreReviews from '../client/src/components/R&R/MoreReviews.jsx';
import NewReview from '../client/src/components/R&R/NewReview.jsx';
import NewReviewChars from '../client/src/components/R&R/NewReviewChars.jsx';


Enzyme.configure({ adapter: new Adapter() });

// describe('App component', () => {
//   let wrapper;
//   beforeEach(() => { wrapper = mount(<App/>); });
//   it ('renders RPList', () => {
//     expect('RPList').not.toBeNull();
//     wrapper.unmount();
//   });
//   it ('renders ProductCard', () => {
//     expect('ProductCard').not.toBeNull();
//     wrapper.unmount();
//   });
//   it ('renders OutfitList', () => {
//     expect('OutfitList').not.toBeNull();
//     wrapper.unmount();
//   });
//   it ('renders ComparisonModal', () => {
//     expect('ComparisonModal').not.toBeNull();
//     wrapper.unmount();
//   });

// });


// describe('ProductCard component', () => {
//   let wrapper;
//   beforeEach(() => { wrapper = shallow(<ProductCard rp={true} outfit={true}/>); });
//   it('calls componentDidMount', () => {
//     const instance = wrapper.instance();
//     jest.spyOn(instance, 'getProductInfo');
//     instance.componentDidMount();
//     expect(instance.getProductInfo).toHaveBeenCalledTimes(1);
//   });

//   it("renders button for open comparison modal", () => {
//     expect('Button').not.toBeNull();
//   });
// })

// describe('RPList component', () => {
//   it('should call componentDidUpdate on prop change', () => {
//     const prevProps = { productId: 39335 }
//     const newprops = { productId: 39336 }
//     const wrapper = shallow(<RPList { ...prevProps } />)
//     const instance = wrapper.instance();
//     jest.spyOn(instance, 'getRelatedProductId');
//     wrapper.setProps(newprops)
//     expect(instance.getRelatedProductId).toBeCalled()
//   })

// })

// describe('ComparisonModal component', () => {
//   let wrapper;
//   const props = {
//     cpInfo: { features: [{feature: 'Fabric', value: 'Canvas'}]},
//     rpInfo: { features: [{feature: 'Buttons', value: 'Brass'}]}
//    }
//   beforeEach(() => { wrapper = shallow(<ComparisonModal { ...props }/>); });
//   it('calls componentDidMount', () => {
//     const instance = wrapper.instance();
//     jest.spyOn(instance, 'getProductFeatures');
//     instance.componentDidMount();
//     expect(instance.getProductFeatures).toHaveBeenCalledTimes(1);
//   });

// })




