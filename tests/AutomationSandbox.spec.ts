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
                await expect(page.getByText('OMG, aparezco después de 3 segundos')).toBeVisible();

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

        test('Lleno un campo de texto en el sandbox', async ({ page }) => { 
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step('Puedo ingresar texto en el campo un Aburrido texto', async () => {
                await expect(page.getByRole('textbox', { name: 'Un aburrido texto' }), 'El campo de texto no es editable').toBeEditable();
                await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill(textoAEscribir);
                await expect(page.getByRole('textbox', { name: 'Un aburrido texto' }), 'El campo de texto no es editable').toHaveValue(textoAEscribir);


            })
        })

        test('Puedo seleccionar y deseleccionar un checkboxes en el sandbox', async ({ page }) => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

                await test.step('Puedo seleccionar el checkbox para pasta', async () => {
                    await page.getByRole('checkbox', { name: 'Pasta 🍝' }).check();
                    await expect(page.getByLabel( 'Pasta 🍝' )).toBeChecked();
                })

                await test.step('Puedo deseleccionar el checkbox pasta', async () => {
                    await page.getByRole('checkbox', { name: 'Pasta 🍝' }).uncheck();
                    await expect(page.getByLabel( 'Pasta 🍝' )).not.toBeChecked();
                })
        })


        test ('Puedo seleccionar radio buttons', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Puedo seleccionar el radio Butoton para NO ', async () => {
                await page.getByRole('radio', { name: 'No' }).check();
                await expect(page.getByLabel( 'No' ), 'El radio button no ha sido seleccionado').toBeChecked();
            })
        })

        //Seleccion del dropdown

        test ('Los items del dropdown son correctos', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Vaido que la lista del dropdown contiene los deportes esperados ', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball', 'Rugby'];
                
                for (let opcion of deportes) {
                    const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
                    if (element) {
                        console.log(`La opción "${opcion}" está presente.`);
                    }else {
                        throw new Error(`La opción "${opcion}" no está presente.`);
                    }
                }
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


        //Tabla estatica

        test ('Valido la columna Nombres de la tabla estatica', async ({ page }) => {
            test.fail();
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Puedo validar los elementos para la columna Nombre de la tabla estatica ', async () => {
                const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent));
                const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
                expect(valoresColumnaNombres).toEqual(nombresEsperados);
            })
        })


        //Tabla dinámica


        test ('Valido que todos los valores cambian en la tabla dinamica luego de un reload', async ({ page }) => {
            await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
            })

            await test.step('Valido que los valores cambiaron al hacer un reload a la web ', async () => {

                //creamos un array con los valores de la tabla dinámica
                const valoresTablaDinamica = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresTablaDinamica);
                
                // Hago una recarga de la pagina para que se generen nuevos valores en la tabla dinámica
                await page.reload();

                // Creamos un segundo array con los valores de la tabla dinámica luego del reload
                const valoresPostReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresPostReload);
                
                // Validamos que los valores sean diferentes
                expect(valoresTablaDinamica).not.toEqual(valoresPostReload);
            })
        })


        test('Ejemplo de Soft Assertions', async ({ page }) => {

            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            });

            await test.step('Valido que todos los elementos de los checkboxes son los correctos', async () => {

                await expect.soft(page.getByText('Pizza 🍕')).toBeVisible();
                await expect.soft(page.getByText('Hamburguesaa 🍔'), 'No se encontro el elemento de Hamburguesa  🍔').toBeVisible();
                await expect.soft(page.getByText('Pasta 🍝')).toBeVisible();
                await expect.soft(page.getByText('Helado0 🍧'), 'No se encontro el elemento de Helado 🍧').toBeVisible();
                await expect.soft(page.getByText('Torta 🍰')).toBeVisible();
            });

        });


        test ('Validando dentro de un popup', async ({ page }) => {

            await test.step('dado que navego al sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })

            await test.step('Cuando hago click en el botón popup', async () => {
                await page.getByRole('button', { name: 'Mostrar popup' }).click();
            })

            await test.step('Puedo validar un elemento dentro de un popup', async () => {
                await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');
                await page.getByRole('button', { name: 'Cerrar' }).click();
            })

        })
        //Subir archivos

        // test ('Puedo subir archivos a Automation Sandbox', async ({ page }) => {
        //     await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
        //         await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
        //     })

        //     await test.step('Agrego archivos para ser subidos', async () => {
        //         await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'invoice1.pdf', 'invoice2.pdf']);
        //         await page.getByLabel('Upload file').setInputFiles([]);
        //     })
        // })

        // test ('Puedo hacer un Drag and Drop de elementos en Automation Sandbox', async ({ page }) => {
        //     await test.step('Dado que navego al sandbox de information Free Range Testers', async () => {
        //         await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');  
        //     })

        //     await test.step('Agrego archivos para ser subidos', async () => {
        //         await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));
        //     })
        // })
    })


})();