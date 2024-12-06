import { mount, flushPromises } from '@vue/test-utils';
import PrincipalView from '@/views/PrincipalView.vue';
import { obtenerTodo } from '@/services/faunaService';

jest.mock('@/services/faunaService', () => ({
  obtenerTodo: jest.fn(() => Promise.resolve({
    especies: [
      {
        id: '1',
        nombre: 'Araucaria Araucana',
        tipo: 'Flora',
        estadoConservacion: 'En peligro',
        ubicacion: 'Chile',
        descripcion: 'data1',
        imagen: 'image1.jpg',
      },
    ],
  })),
}));

describe('PrincipalView.vue', () => {
  it('debe renderizar correctamente el título (html fuera del componente)', async () => {
    const wrapper = mount(PrincipalView, {
      global: {
        stubs: ['router-link'], 
      },
    });

    await flushPromises(); 
    expect(wrapper.find('h1').text()).toBe('Especies');
  });

  it('debe renderizar el nombre de flora/fauna en el componente', async () => {
    const wrapper = mount(PrincipalView, {
      global: {
        stubs: ['router-link'], 
      },
    });
    await flushPromises(); 
    expect(wrapper.find('h5').text()).toContain('Araucaria Araucana');
  });
});
