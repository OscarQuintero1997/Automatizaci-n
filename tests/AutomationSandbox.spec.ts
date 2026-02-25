import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    let textoAEscribir = 'Estoy aprendiendo Playwright';

    test.describe('Acciones en el automation sanbbox', () => {
        test('Click en botón ID Dinamico', async ({ page }) => { 
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step('Puedo hacer click en el botón con ID dinámico', async () => {
                await page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' }).click();

                const botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
                await botonIDDinamico.click({force: true});
                // await botonIDDinamico.dblclick({});
                // await botonIDDinamico.click({button: 'right', force: true});
                // await botonIDDinamico.click({modifiers: ['Shift']});
                // await botonIDDinamico.hover();
            })

            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step('Puedo ingresar texto en el campo un Aburrido texto', async () => {
                await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill(textoAEscribir);
            })
             
        })

        test('Puedo seleccionar checkboxes', async ({ page }) => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

                await test.step('Puedo seleccionar el checkbox para pasta', async () => {
                    await page.getByRole('checkbox', { name: 'Pasta 🍝' }).check
                })
        })


        test ('Puedo seleccionar radio buttons', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Puedo seleccionar el radio Butoton para NO ', async () => {
                await page.getByRole('radio', { name: 'No' }).check();
            })
        })

        //Seleccion del dropdown

        test ('Puedo seleccionar in item del dropdown', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Selecciono un deporte del dropdown ', async () => {
                await page.getByLabel('Dropdown').selectOption('Fútbol');
            })
        })


        test ('Puedo seleccionar in item del dropdown Días de la semana', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Selecciono un día de la semana del dropdown ', async () => {
                await page.getByRole('button', { name: 'Día de la semana' }).click();
                await page.getByRole('link', { name: 'Lunes' }).click();
            })
        })


        //Subir archivos

        test ('Puedo subir archivos a Automation Sandbox', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Agrego archivos para ser subidos', async () => {
                await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'invoice1.pdf', 'invoice2.pdf']);
                await page.getByLabel('Upload file').setInputFiles([]);
            })
        })

        test ('Puedo hacer un Drag and Drop de elementos en Automation Sandbox', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Agrego archivos para ser subidos', async () => {
                await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));
            })
        })
    })


})();