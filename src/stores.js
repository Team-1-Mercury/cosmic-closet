import create from 'zustand';
import { devtools } from 'zustand/middleware';

const details = (set, get) => ({
  productDetails: [],
  setProductDetails: (data) => set({ productDetails: data }),
  styles: [],
  setStyles: (data) => set({ styles: data }),
  selectedStyle: {}, // will be the style object
  setSelectedStyle: (data) => set({ selectedStyle: data }),
  selectedSize: '',
  setSelectedSize: (data) => set({ selectedSize: data }),
  selectedQuantity: '',
  setSelectedQuantity: (data) => set({ selectedQuantity: data }),
  showSizeSelector: false,
  // TODO: Combine the two toggle functions to be a single function
  toggleShowSizeSelector: (bool) => {
    if (bool === undefined) {
      set({ showSizeSelector: !get().showSizeSelector });
    } else {
      set({ showSizeSelector: bool });
    }
  },
  showQuantitySelector: false,
  toggleShowQuantitySelector: (bool) => {
    if (bool === undefined) {
      set({ showQuantitySelector: !get().showQuantitySelector });
    } else {
      set({ showQuantitySelector: bool });
    }
  },
  toastShown: false,
  toggleToastShown: () => {
    set({ toastShown: true });
    setTimeout(() => {
      set({ toastShown: false });
    }, 3000);
  },
  startingThumbnailIndex: 0,
  setStartingThumbnailIndex: (data) => set({ startingThumbnailIndex: data }),
  selectedImageIndex: 0,
  setSelectedImageIndex: (index) => set({ selectedImageIndex: index }),
  imageZoomed: false,
  toggleImageZoomed: (bool) => {
    if (bool === undefined) {
      set({ imageZoomed: !get().imageZoomed });
    } else {
      set({ imageZoomed: bool });
    }
  },
});
const detailStore = create(devtools(details));

// const ratingStore = create(
//   // To be able to see multiple stores in Redux DevTools, set the selector in the
//   // extension to "Autoselect instances"
//   devtools((set) => ({
//     dogs: 999,
//     increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
//     decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
//   })),
// );

const questionsStore = create(
  // To be able to see multiple stores in Redux DevTools, set the selector in the
  // extension to "Autoselect instances"
  devtools((set) => ({
    questions: [],
    setQuestions: (data) => set(() => ({ questions: data })),
    answers: [],
    setAnswers: (data) => set(() => ({ answers: data })),
    wasHelpful: [],
    addHelpful: (question) => set((state) => ({
      wasHelpful: [
        question, ...state.wasHelpful,
      ],
    })),
    // dogs: 999,
    // increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    // decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

const reviewStore = create(
  devtools((set) => ({
    reviews: [],
    setReviews: (data) => set(() => ({ reviews: data })),
    ratings: [],
    setRatings: (data) => set({ ratings: data }),
    averageRating: 0,
    setAverageRating: (data) => set({ averageRating: data }),
  })),
);

export {
  detailStore, questionsStore, reviewStore,
};
