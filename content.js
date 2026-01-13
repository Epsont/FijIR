// Проверка обновления версии
chrome.runtime.sendMessage({ action: "check_update" });


// Картинки Base64 (Это ужас, но я не знаю другой путь)
const fijiImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEVHcEwhJTA3dJEMDhEyg6cQExcSdqMAAABRsdrGlJ3AVFQ8SmWBfJMhjb2zKioaVnIplcXMr7QvnMsWkMW4cXVvcY3l2+DKxsnmsLLonqF0xehqwOaLtL9gveXHlpTci5NYueNrstKWmrFNteLNiUfaeHxCsN83q95ZnMI0qNp+iqJjoGUlotnZT1asWzZ1YXvMKCo4Pmv6dVldAAAAFnRSTlMABQkUFjteaG1zeXh7ha24ur7J8P39bi3SMQAAAbBJREFUeNqN0utSgzAQBWAoUEW8FYFAGwjXElIi5P1fzuwmRh394ZlemDnf7MIE718JoiRJ4of4MdF5jOP4HhN6NvFJKKWafcqV2rKpJHSAXNN7rP0oYyXJDdimivSKt9BfrwuKMM97VhZFuU+EVUUh8o23nwK2PEwYJnepfxlc93VtyPykNzzvvyI6bpMevMOpaVhZVhXbJfxVjDEq3k22NPT8F5WTopp6uIeiYCzfFBfZCLGgJ1W22ccUpGTZxnnTNHIcM6HB4cSgtkAh6TtKqWxuNwrglZvQnuK9dedzRwklsqQEQToMbV1fLpfzV4SUctffzQEtzt8EbSom2Tj2uOL6G3SkKGR5Ix2CGQXULhdKiGwoXyzQQpPvI+qOvgs+zw6AgD0YuGqHBQ4LwQIABRr82OOcDZgNcHXrDtMB2IECCfQtDjArVgBOtLb/AZwwxPXzagDuAOEy2AEW2BFIXI0DAPgaLCCAYFy/rOvrwfOeViOAuNr2K7y04RsKJDaufws9LY4gkLgWauiPHuaYagLGZcU6PfpQ+0EQJS9/JImCwEcQ6dxFdz8SYQLf+wC2YG8dFfqcEQAAAABJRU5ErkJggg=="
const youraImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAOxAAADsQH1g+1JAAAArlBMVEVHcExcZuFaZd9bZd9aZd9ZZN1gautKVrpgaupJVrtfaelJVrlgautJVrn////6+vzo8/7s7/fe6vr/3Nbg5PXq3uTB4v7V1/n5yMS43f7/uq/Dyeuh0v3qtLe3vuSNyv+Gx//rpKetsuz/infnkJb/eGSOle96hOT2WUr/VjzgW1+pZpdocux0cc9gaupjaeRZZNzqMi6QTH1vU5xOWb5IVbdXUKjwHRKhNl7MJzTaZckSAAAADnRSTlMAAhorOW6Qmbi82+Ht9Pdq6W4AAAGTSURBVHjabdPZeoIwEAVgloCIGExUxLVqVUAqtCJG3//FOmC2YudG+fIzHELGkGXajucHRRH4nmObRrdM5PqFLN9FHWK5QfGnAtfS15EnFpJE/POQti67nyaTk3wO+medYPIuLNWfYkw04Vltfldcf80wDiklM5nDNQEgmX8Dy9FqRcmmFO+C9AYJwTSaf2xXdJJ8qxa2TLjHo6gB24jsb1z4tuEUomYCzMnyJoRjeCqi7ACg5sIzfA2IDA3gwjcCHYSjaDWnpAFcBEYhCwAQ0tQGABddgAUQQj2iWPIOFEBdcxGokOVhASBeQ4NDXgvhy9e85OlniMNjOiX0zB53Lvpio8o8y44hHmdsTaYpYw8OHLHVlzMAghcZO4ymP4w9Xy0GNnwsCdLxC8QK9Ez5uTWwZgIMkTwwJYAsfoFdA3gDdeRyAAscZ2w3OjAesm9phxZAGoctWEOGa5NQP9aQ8lpdYDNYnlyqx7Pi62pwynb771V1b3+hP+qOHghVw571PrxKDHpqePXx7w+GcO+gr4//LyfZeP9eATj0AAAAAElFTkSuQmCC"
const geoImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAMAAAA7dZg3AAAAAXNSR0IB2cksfwAAAYNQTFRFAAAAALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+ALLJALLJeLk+eLk+eLk+eLk+ALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+Qu+5GQAAAIF0Uk5TAAY6fpeVezAEatf/CYjw/VD3CqhG4nz7oJ6M5xa+XfxXDqmiDKunEH/zcyRkIAUjRFkdHlo+IDB6xvf9mASW//PAeCw0qMsYK8Tv02zxBtXneRQCMovtVoT5hIhchuMSb2Nm+4IXQuveoHZSQOExA0ew9aQ/ARB0v/m3CBNRmUsP+0VCvAAAAXVJREFUeJxlkmdDwjAQQIOKAmXvKQ4cKOJAQUUMyhYEpG4ElaEs997+dLts2vK+NHevuVyuBeAfUU9vn7h/QAKESKQyjEImFUi5QokxKBVyrhGJVRiLSiziKLUG46BRI6PVYTx0WlbpDXxl0LPKaOIrk5FVZkyAmVUWobKwyipUVtS7jW9sqHu7g68cdnSxQSfXOIc40xge4apRF2++Y2jPOH/yYGLSTRv3lAsImfYQX0zmmekSzFDMXUnv7Nz8Aq18i0t+LzKB5ZXV4FqIVKF1GN7YjDAiGoMk8QSpEnEqiEVJk0wFifVWOkPvyqS3iTCYSgKQzRGr/E6ggNNn4YXdvX0ilcuCA+Jx6KMqK0xHx9TCVySSJ6AEYRmnDz09O2f+JbwMYQlUIKzWIjj3KnikVoWwAupk4XjFj4w/Q3aZrwNwcUm122i22p1Ou9VsUOHVNfHSze3dPRQQfnh8oio8v7xWueLtPfOB6n9+Fb8Zaj+/dO4P7VpTrDeIRg0AAAAASUVORK5CYII="
const platformImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAbCAMAAACz4aQdAAAAAXNSR0IB2cksfwAAAQVQTFRFAAAAtNZXqtBAqdA9qdA+i8JCfLtEfLtDgb5KqtBAp887p846p846p886icE+ebpAebpAerpAe7pCgL1Jq9FEqM88ps44h8A8eLk+ebk/fbtFqM88ps44ebk/f71Iqc8+ps45ebpAgr9Np887eLk/fbxFp846e7pCps45erpAeLk+stVT36JV7opN4ZtOl8lWisNY54pO6olO541RisNY9opX9YNO9YNO9YNO9YVRDrbfBLPdB7TeCrXeALLdA7PdDLbfArPdAbLdArPdArPdAbLdArLdBbTeBLPeDbbfAbLdArPe9opX9YNO9YNOAbLdALLdBLPeDbbfAbLdArPe9YNO9YVRCtScHAAAAFd0Uk5TAAMbKSsrKyQQQKDg/P////LJcRQJiv///+JCh/3qKUjzwgWm+C7lZf5+gBtP/1kbG8v/wQ07/0XFujTQnED/vyyx/9i4+diFgBXqgB2AI4CAQAt1QGJdC6r2awAAALpJREFUeJztzsUagmAQheGxuxWxuwsLGwU7sPX+L0X0+UFFYeXSd3MW32IGgKNQqtSIRovo9MAzGE1mC2K1IXaH0/Wobg/2wos/+fz3HghKdTwUBohEMcmOx+KQwGR6MgVpuY5nICvbc4DJ9jwUiqVSuSCoEIJqrU40AJok2YJv2mTnPv/+g97tifTf+4ASGb73Ec0wYxqZTJnZXHyfoRb84eWKWn/8J9k3LLvlZrc/8P142p+5ubBXgBuGy0hno1wzVAAAAABJRU5ErkJggg=="
const infoRussiaImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAwFBMVEUAAADh4eHT09PPz8+9vb3Q0NDQ0NDq6+vu7u/Nzc3Q0NDKysrAwMDa2trQ0NDQ0NDq6urW1tbPz8/k5OTe3t7X2drBwcHa2trHx8fT09Pc3Nzl5eXX19fS0tLc3Nza2tr////+/v78/Pzy8/T39/d0hZCczgXZ3d9ofIi/xsizvsHw8PGrtLj5+fqNnqjGztFmc3tIVl1SYWng4+WirLFebXR+jpfX6KeFlJ2y2jY8SlKXo6qOmJ/S6IzN5nvV38TT8TBtAAAAIHRSTlMA6LUmBh10/P0QlKYws1199cFs8dv6Sbk/hub2yZq7zMzSglAAAAG/SURBVHjabZLZeqJAEIULRHZREIwxyQwCPTT7jqgxef+3mtBsgeS/6f6qDodTBTAhHEWJNgxaEo8C/GS1Vfe8E1lW5PB7dbuCOYKm85Y5YvG6NnNZbzjSnrC4zfpb/8k2f2A/rae+Y/6CMyjWf+yxViR+6HtuV7A3XY5nbmgnd4RQE8dN7BMJz5L59D4fXyJc+25g23wSx0Wb9LRqDYK+H2Ncu0NCP2mP4BlAeO0MrBJjfB+HPVuk+CrAYU8KUYgRwthbrOPlAGJApCHyPz99hJPFMkSQyA4KlHxcrw8vrecriyRQian/fvn3xaVJjfnG/4JBBOH9oxU84iqZCww4EYFXdw6ocueCE9BRe+Fw+LheL2FeO3OB2oc0varx/SZP3cUHk2DLdVIP5VmGFn2T34JMDSOHeV6YCygZGBKiW1YetvfIK92hRDMACjcm8lLkcUGZ3dK+xikAIKhT8OKeplV2u2WdRaSSP0Z5OZsjgeGVVfZOnjnvj9DCsDtzBuc63clCDzvEWIzIAIF4WMu2tWMZmFB0+zzr27oCM1YiFYwulk2JK1giazS144OA31E0K8NvMPJBe3vTDvL3l/8HHPJn62dntSAAAAAASUVORK5CYII="
const yaImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMWE5LjAwMiA5LjAwMiAwIDAgMC02LjM2NiAxNS4zNjJjMS42MyAxLjYzIDUuNDY2IDMuOTg4IDUuNjkzIDYuNDY1LjAzNC4zNy4zMDMuNjczLjY3My42NzMuMzcgMCAuNjQtLjMwMy42NzMtLjY3My4yMjctMi40NzcgNC4wNi00LjgzMSA1LjY4OS02LjQ2QTkuMDAyIDkuMDAyIDAgMCAwIDEyIDF6IiBmaWxsPSIjRjQzIj48L3BhdGg+PHBhdGggZD0iTTEyIDEzLjA3OWEzLjA3OSAzLjA3OSAwIDEgMSAwLTYuMTU4IDMuMDc5IDMuMDc5IDAgMCAxIDAgNi4xNTh6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+"
const yaMapImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMWE5LjAwMiA5LjAwMiAwIDAgMC02LjM2NiAxNS4zNjJjMS42MyAxLjYzIDUuNDY2IDMuOTg4IDUuNjkzIDYuNDY1LjAzNC4zNy4zMDMuNjczLjY3My42NzMuMzcgMCAuNjQtLjMwMy42NzMtLjY3My4yMjctMi40NzcgNC4wNi00LjgzMSA1LjY4OS02LjQ2QTkuMDAyIDkuMDAyIDAgMCAwIDEyIDF6IiBmaWxsPSIjRkNENzU5Ij48L3BhdGg+PHBhdGggZD0iTTEyIDEzLjA3OWEzLjA3OSAzLjA3OSAwIDEgMSAwLTYuMTU4IDMuMDc5IDMuMDc5IDAgMCAxIDAgNi4xNTh6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+";
const nakarteMe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjUgN0wxNC45OTQ5IDE1Ljg1NzUiIHN0cm9rZT0iIzAwQkI0RSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xMy42MzY4IDIuMDAwMDFMMTQgNi4wMDAwMSIgc3Ryb2tlPSIjMDBCQjRFIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTE1IDhMMTguNSA5Ljk5OTk3TDIwIDE1IiBzdHJva2U9IiMwMEJCNEUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTQgNUwxNC41IDcuNTAwMDciIHN0cm9rZT0iIzAwQkI0RSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xNC45OTk3IDE1LjMxNzVMMTggMjFMMjAuNSAyNS41IiBzdHJva2U9IiMwMEJCNEUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTMuOTk5OSAxNS4zMzkxTDEwIDIwLjVMOCAyNS41IiBzdHJva2U9IiMwMEJCNEUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMTQgOC41TDEyLjUgMTIuNUw5IDE1IiBzdHJva2U9IiMwMEJCNEUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K"
const kadastrSite = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4MzkwXzIpIj4KPHBhdGggZD0iTTAgMThDMCAxMC43NzcxIDAgNy4xNjU1OCAxLjczMzQ2IDQuNTcxMjhDMi40ODM4OSAzLjQ0ODE4IDMuNDQ4MTggMi40ODM4OCA0LjU3MTI4IDEuNzMzNDVDNy4xNjU1OCAwIDEwLjc3NzEgMCAxOCAwQzI1LjIyMjkgMCAyOC44MzQ0IDAgMzEuNDI4NyAxLjczMzQ1QzMyLjU1MTggMi40ODM4OCAzMy41MTYxIDMuNDQ4MTggMzQuMjY2NSA0LjU3MTI4QzM2IDcuMTY1NTggMzYgMTAuNzc3MSAzNiAxOEMzNiAyNS4yMjMgMzYgMjguODM0NSAzNC4yNjY1IDMxLjQyODhDMzMuNTE2MSAzMi41NTE5IDMyLjU1MTggMzMuNTE2MiAzMS40Mjg3IDM0LjI2NjZDMjguODM0NCAzNiAyNS4yMjI5IDM2IDE4IDM2QzEwLjc3NzEgMzYgNy4xNjU1OCAzNiA0LjU3MTI4IDM0LjI2NjZDMy40NDgxOCAzMy41MTYyIDIuNDgzODkgMzIuNTUxOSAxLjczMzQ2IDMxLjQyODhDMCAyOC44MzQ1IDAgMjUuMjIzIDAgMThaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMTgzOTBfMikiLz4KPHBhdGggZD0iTTAuMzAwMDQ5IDE3Ljk5OTlDMC4zMDAwNDkgMTQuMzgyMiAwLjMwMDQxMiAxMS42OTE1IDAuNTE1MTkxIDkuNTgwMTlDMC43Mjk0NiA3LjQ3Mzg4IDEuMTU0NjQgNS45Nzc1MiAxLjk4Mjk1IDQuNzM3ODhDMi43MTE0OSAzLjY0NzU0IDMuNjQ3NjYgMi43MTEzNyA0LjczOCAxLjk4MjgzQzUuOTc3NjQgMS4xNTQ1MiA3LjQ3NCAwLjcyOTMzNyA5LjU4MDMxIDAuNTE1MDY5QzExLjY5MTYgMC4zMDAyOSAxNC4zODIzIDAuMjk5OTI3IDE4IDAuMjk5OTI3QzIxLjYxNzcgMC4yOTk5MjcgMjQuMzA4NSAwLjMwMDI5IDI2LjQxOTggMC41MTUwNjlDMjguNTI2MSAwLjcyOTMzNyAzMC4wMjI0IDEuMTU0NTIgMzEuMjYyMSAxLjk4MjgzQzMyLjM1MjQgMi43MTEzNyAzMy4yODg3IDMuNjQ3NTQgMzQuMDE3MiA0LjczNzg4QzM0Ljg0NTUgNS45Nzc1MiAzNS4yNzA3IDcuNDczODggMzUuNDg1IDkuNTgwMTlDMzUuNjk5NyAxMS42OTE1IDM1LjcwMDEgMTQuMzgyMiAzNS43MDAxIDE3Ljk5OTlDMzUuNzAwMSAyMS42MTc3IDM1LjY5OTcgMjQuMzA4NCAzNS40ODUgMjYuNDE5N0MzNS4yNzA3IDI4LjUyNiAzNC44NDU1IDMwLjAyMjQgMzQuMDE3MiAzMS4yNjJDMzMuMjg4NyAzMi4zNTIzIDMyLjM1MjQgMzMuMjg4NSAzMS4yNjIxIDM0LjAxN0MzMC4wMjI0IDM0Ljg0NTMgMjguNTI2MSAzNS4yNzA1IDI2LjQxOTggMzUuNDg0OEMyNC4zMDg1IDM1LjY5OTYgMjEuNjE3NyAzNS42OTk5IDE4IDM1LjY5OTlDMTQuMzgyMyAzNS42OTk5IDExLjY5MTYgMzUuNjk5NiA5LjU4MDMxIDM1LjQ4NDhDNy40NzQgMzUuMjcwNSA1Ljk3NzY0IDM0Ljg0NTMgNC43MzggMzQuMDE3QzMuNjQ3NjYgMzMuMjg4NSAyLjcxMTQ5IDMyLjM1MjMgMS45ODI5NSAzMS4yNjJDMS4xNTQ2NCAzMC4wMjI0IDAuNzI5NDYgMjguNTI2IDAuNTE1MTkxIDI2LjQxOTdDMC4zMDA0MTIgMjQuMzA4NCAwLjMwMDA0OSAyMS42MTc3IDAuMzAwMDQ5IDE3Ljk5OTlaIiBzdHJva2U9IiM0RjczRDkiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMC42Ii8+CjxwYXRoIGQ9Ik0yMy4xMDIzIDMwTDE1LjYyNSAyMC4wNzk1SDEzLjk0MzJWMzBIOS4wMjI3M1Y2LjcyNzI3SDEzLjk0MzJWMTYuMDIyN0gxNC45MzE4TDIyLjY1OTEgNi43MjcyN0gyOC43ODQxTDE5LjcwNDUgMTcuNTIyN0wyOS4yMDQ1IDMwSDIzLjEwMjNaIiBmaWxsPSIjQTkwMDAwIi8+CjwvZz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8xODM5MF8yIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjEwNzEgMTgpIHJvdGF0ZSg0NC4yODMpIHNjYWxlKDIyLjE5OTgpIj4KPHN0b3Agb2Zmc2V0PSIwLjU1ODY3OCIgc3RvcC1jb2xvcj0iIzZEOTNGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4M0ZGNUQiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODM5MF8yIj4KPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
const nspdGovRu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyOCcgaGVpZ2h0PScyOCcgZmlsbD0nbm9uZSc+PHBhdGggZmlsbD0ndXJsKCNhKScgZD0nTTEzLjAxNSAyLjE5N3MuMjctLjAxLjM4LS4wMWMuMTEgMCAuMzc0LjAxLjM3NC4wMS4yNjguMDIxLjUzMS4wNDkuNzk3LjA2OWExMS40NSAxMS40NSAwIDAgMSA1LjQ3MyAyLjA1M2MuNDgyLjM1Ni45NzIuNzE0IDEuMzg3IDEuMTUtMi44MTUuMDE2LTUuNjMgMC04LjQ0NS4wMDgtLjM2OC4wMS0uNzM2LjA1LTEuMTAzLjA5My0uNjE3LjA2Ni0xLjE5My4zMi0xLjc1OC41NjMtLjcwNi4zNDUtMS40My42ODgtMi4wMiAxLjIyM2ExMC45NDggMTAuOTQ4IDAgMCAwLTEuNTU1IDEuNjQ4Yy0uMzcyLjUzNi0uNjU2IDEuMTI4LS45MyAxLjcyLS4yMzIuNTYyLS40NzcgMS4xMzMtLjU0IDEuNzQ1LS4wNDguNDI3LS4wOTMuODU2LS4wOTMgMS4yODZ2OC4wMDFjLjAwMi4yNTUgMCAuNTAzIDAgLjc3OWguNzEzYzIuNjg1LS4wMDMgNS4zNy4wMDIgOC4wNTUtLjAwMy43MDItLjA0MSAxLjQyNC0uMDYgMi4wODktLjMyMi42MzktLjIyNSAxLjI1LS41MjQgMS44NDMtLjg1NC4yODItLjE1My41NDEtLjQxLjg4Ni0uMzgyIDEuMzkzLjAxNSAyLjc4Ny0uMDEgNC4xOC4wMTMtLjEzMi4yNDYtLjMyLjQ1NC0uNDk1LjY2Ny0xLjYwMiAxLjkxNC0zLjgyIDMuMjkxLTYuMjM1IDMuODQ4LS43Mi4xNzgtMS40NTguMjQ3LTIuMTk0LjMxSDEuNzVWMTMuNjIzYy4wNjQtMS4wMDkuMTk3LTIuMDE2LjQ4OC0yLjk4NmExMS44MTggMTEuODE4IDAgMCAxIDQuMjg1LTYuMTU2IDExLjQ1IDExLjQ1IDAgMCAxIDUuNzQ2LTIuMjJjLjI1LS4wMy40OS0uMDY0Ljc0Ni0uMDY0WicvPjxwYXRoIGZpbGw9J3VybCgjYiknIGQ9J00xMi4xNzMgNy4wOWMuMzA2LS4xNTEuNjU0LS4wOTguOTgxLS4xMDQgNC4xNDktLjAwMSA4LjI5OC4wMDIgMTIuNDQ3LS4wMDMuMDg3LjAxLjE5NC0uMDExLjI1NC4wNy4wMjEuMTY4LS4xMzEuMjgtLjIyNy4zOTQtMS4wNTIgMS4wNi0yLjA4NyAyLjEzNi0zLjEyOCAzLjIwNy0uMzA0LjI2My0uNTIyLjY0My0uOTEyLjc5LS4zNDQuMTUtLjcyNS4xMS0xLjA4OS4xMTMtNC4wNzYgMC04LjE1MS0uMDAyLTEyLjIyNyAwLS4xMjMtLjAxLS4zMjUuMDA3LS4zNDYtLjE1OCAwLS4wOTIuMDY4LS4xNjIuMTI0LS4yMjcgMS4xMzctMS4xNCAyLjI1MS0yLjMwMiAzLjM4Ni0zLjQ0NC4yMjUtLjIzNC40MjctLjUxNC43MzctLjYzOVonLz48cGF0aCBmaWxsPSd1cmwoI2MpJyBkPSdNMjMuNzk2IDExLjQ1OGMuMTYyLS4xNjIuMjktLjM3Ni40OTYtLjQ4LjM5Ny0uMDM4Ljc5OC0uMDE3IDEuMTk2LS4wMTcuMTI4IDAgLjI3NS0uMDMyLjM2Ny4wNy4wMi4xNy0uMTMxLjI4My0uMjI3LjM5OC0xLjIzNSAxLjI1Ni0yLjQ0NyAyLjUzNC0zLjY3MiAzLjc5OC0uMjU3LjI0NS0uNjE2LjM0OC0uOTYyLjM1LTQuMjQxLS4wMDItOC40ODMtLjAwMi0xMi43MjQgMC0uMTA2LS4wMDYtLjIyMS0uMDA1LS4zMTItLjA3LS4wOTEtLjEyOC4wMzEtLjI1OC4xMTUtLjM0OC42NTYtLjY1MyAxLjI5LTEuMzI4IDEuOTQyLTEuOTg2LjA3LS4wODYuMTc5LS4xMDUuMjgzLS4xMDQgMy41MS4wMDIgNy4wMiAwIDEwLjUyOS4wMDIuNDcuMDAyLjkzNS0uMTEzIDEuMzc4LS4yNjUuNjY4LS4yNTYgMS4xMDQtLjg1MiAxLjU5LTEuMzQ4WicvPjxwYXRoIGZpbGw9J3VybCgjZCknIGQ9J00yNC4zMDUgMTQuOTE3Yy4wNzgtLjA4NC4yLS4wNjkuMzAzLS4wNzVsLjk5My4wMDFjLjA4Ni4wMS4xOTUtLjAxMy4yNTQuMDcuMDIyLjE3LS4xMzIuMjgzLS4yMjcuMzk5LTEuMjM0IDEuMjU3LTIuNDQ3IDIuNTM1LTMuNjcyIDMuODAxLS4yNTYuMjQ1LS42MTUuMzQ4LS45Ni4zNS00LjI0Mi0uMDAyLTguNDgzLS4wMDItMTIuNzI0IDAtLjEyMy0uMDEtLjMyNi4wMDctLjM0Ni0uMTYuMDAyLS4xMDcuMDg1LS4xODQuMTQ5LS4yNTguNjA4LS42MDkgMS4yMDMtMS4yMzIgMS44MDMtMS44NS4wOS0uMTEzLjIzMi0uMTQzLjM2OS0uMTM3IDMuNDcyLjAwMyA2Ljk0NC0uMDAyIDEwLjQxNy4wMDMuNTUzLjAyNyAxLjEwNy0uMDkzIDEuNjIyLS4yOTQuNjA0LS4yNTYgMS4wMDMtLjgwMSAxLjQ1Ni0xLjI1Ni4xODYtLjIuMzYzLS40MS41NjMtLjU5NFonLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPScyMi4yNDEnIHgyPScyLjE2NCcgeTE9JzUuNzMxJyB5Mj0nMjYuMjE4JyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHN0b3Agc3RvcC1jb2xvcj0nIzRBRkZEOCcvPjxzdG9wIG9mZnNldD0nLjI4Nicgc3RvcC1jb2xvcj0nIzAwQ0FGRicvPjxzdG9wIG9mZnNldD0nLjY3Nycgc3RvcC1jb2xvcj0nIzJEOTNGRicvPjxzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nIzAwN0NGRicvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSdiJyB4MT0nMjIuMjQxJyB4Mj0nMi4xNjQnIHkxPSc1LjczMScgeTI9JzI2LjIxOCcgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnPjxzdG9wIHN0b3AtY29sb3I9JyM0QUZGRDgnLz48c3RvcCBvZmZzZXQ9Jy4yODYnIHN0b3AtY29sb3I9JyMwMENBRkYnLz48c3RvcCBvZmZzZXQ9Jy42NzcnIHN0b3AtY29sb3I9JyMyRDkzRkYnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyMwMDdDRkYnLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0nYycgeDE9JzIyLjI0MScgeDI9JzIuMTY0JyB5MT0nNS43MzEnIHkyPScyNi4yMTgnIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJz48c3RvcCBzdG9wLWNvbG9yPScjNEFGRkQ4Jy8+PHN0b3Agb2Zmc2V0PScuMjg2JyBzdG9wLWNvbG9yPScjMDBDQUZGJy8+PHN0b3Agb2Zmc2V0PScuNjc3JyBzdG9wLWNvbG9yPScjMkQ5M0ZGJy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjMDA3Q0ZGJy8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9J2QnIHgxPScyMi4yNDEnIHgyPScyLjE2NCcgeTE9JzUuNzMxJyB5Mj0nMjYuMjE4JyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHN0b3Agc3RvcC1jb2xvcj0nIzRBRkZEOCcvPjxzdG9wIG9mZnNldD0nLjI4Nicgc3RvcC1jb2xvcj0nIzAwQ0FGRicvPjxzdG9wIG9mZnNldD0nLjY3Nycgc3RvcC1jb2xvcj0nIzJEOTNGRicvPjxzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nIzAwN0NGRicvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
const mapRu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDE3Ljk5OTlDMCAxMC43NzcgMCA3LjE2NTUyIDEuNzMzNDYgNC41NzEyMkMyLjQ4Mzg5IDMuNDQ4MTIgMy40NDgxOCAyLjQ4MzgyIDQuNTcxMjggMS43MzMzOUM3LjE2NTU4IC02LjEwMzUyZS0wNSAxMC43NzcxIC02LjEwMzUyZS0wNSAxOCAtNi4xMDM1MmUtMDVDMjUuMjIyOSAtNi4xMDM1MmUtMDUgMjguODM0NCAtNi4xMDM1MmUtMDUgMzEuNDI4NyAxLjczMzM5QzMyLjU1MTggMi40ODM4MiAzMy41MTYxIDMuNDQ4MTIgMzQuMjY2NSA0LjU3MTIyQzM2IDcuMTY1NTIgMzYgMTAuNzc3IDM2IDE3Ljk5OTlDMzYgMjUuMjIyOSAzNiAyOC44MzQ0IDM0LjI2NjUgMzEuNDI4N0MzMy41MTYxIDMyLjU1MTggMzIuNTUxOCAzMy41MTYxIDMxLjQyODcgMzQuMjY2NUMyOC44MzQ0IDM1Ljk5OTkgMjUuMjIyOSAzNS45OTk5IDE4IDM1Ljk5OTlDMTAuNzc3MSAzNS45OTk5IDcuMTY1NTggMzUuOTk5OSA0LjU3MTI4IDM0LjI2NjVDMy40NDgxOCAzMy41MTYxIDIuNDgzODkgMzIuNTUxOCAxLjczMzQ2IDMxLjQyODdDMCAyOC44MzQ0IDAgMjUuMjIyOSAwIDE3Ljk5OTlaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfMjExOF8xMDg1NSkiLz4KICAgIDxwYXRoIGQ9Ik0wLjMgMTcuOTk5OUMwLjMgMTQuMzgyMiAwLjMwMDM2MyAxMS42OTE1IDAuNTE1MTQyIDkuNTgwMkMwLjcyOTQxMSA3LjQ3Mzg5IDEuMTU0NTkgNS45Nzc1MyAxLjk4MjkgNC43Mzc4OUMyLjcxMTQ0IDMuNjQ3NTUgMy42NDc2MSAyLjcxMTM4IDQuNzM3OTUgMS45ODI4NEM1Ljk3NzU5IDEuMTU0NTMgNy40NzM5NSAwLjcyOTM0OSA5LjU4MDI2IDAuNTE1MDgxQzExLjY5MTYgMC4zMDAzMDIgMTQuMzgyMyAwLjI5OTkzOSAxOCAwLjI5OTkzOUMyMS42MTc3IDAuMjk5OTM5IDI0LjMwODQgMC4zMDAzMDIgMjYuNDE5NyAwLjUxNTA4MUMyOC41MjYgMC43MjkzNDkgMzAuMDIyNCAxLjE1NDUzIDMxLjI2MjEgMS45ODI4NEMzMi4zNTI0IDIuNzExMzggMzMuMjg4NiAzLjY0NzU1IDM0LjAxNzEgNC43Mzc4OUMzNC44NDU0IDUuOTc3NTMgMzUuMjcwNiA3LjQ3Mzg5IDM1LjQ4NDkgOS41ODAyQzM1LjY5OTYgMTEuNjkxNSAzNS43IDE0LjM4MjIgMzUuNyAxNy45OTk5QzM1LjcgMjEuNjE3NyAzNS42OTk2IDI0LjMwODQgMzUuNDg0OSAyNi40MTk3QzM1LjI3MDYgMjguNTI2IDM0Ljg0NTQgMzAuMDIyNCAzNC4wMTcxIDMxLjI2MkMzMy4yODg2IDMyLjM1MjMgMzIuMzUyNCAzMy4yODg1IDMxLjI2MjEgMzQuMDE3QzMwLjAyMjQgMzQuODQ1MyAyOC41MjYgMzUuMjcwNSAyNi40MTk3IDM1LjQ4NDhDMjQuMzA4NCAzNS42OTk2IDIxLjYxNzcgMzUuNjk5OSAxOCAzNS42OTk5QzE0LjM4MjMgMzUuNjk5OSAxMS42OTE2IDM1LjY5OTYgOS41ODAyNiAzNS40ODQ4QzcuNDczOTUgMzUuMjcwNSA1Ljk3NzU5IDM0Ljg0NTMgNC43Mzc5NSAzNC4wMTdDMy42NDc2MSAzMy4yODg1IDIuNzExNDQgMzIuMzUyMyAxLjk4MjkgMzEuMjYyQzEuMTU0NTkgMzAuMDIyNCAwLjcyOTQxMSAyOC41MjYgMC41MTUxNDIgMjYuNDE5N0MwLjMwMDM2MyAyNC4zMDg0IDAuMyAyMS42MTc3IDAuMyAxNy45OTk5WiIgc3Ryb2tlPSIjNEY3M0Q5IiBzdHJva2Utb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjAuNiIvPgogICAgPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yMTE4XzEwODU1KSI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjE5NzE3IDI0LjIxODFDNS4yMTA2NyAyMC4wMDA3IDUuNDA3OTYgMTMuMTQxMyA5LjU5MTA3IDkuMTg3MTNDMTMuNzc0MiA1LjIzMyAyMC40MTU0IDUuMTkwNjUgMjQuNjIwNCA5LjYzOTExQzI2Ljk0NDQgMTIuMDk3NyAyNy45OTUzIDE0Ljc2MjcgMjcuODQyNiAyMC4xNTc5QzI3Ljg3NjggMjEuODE0MSAyNy45NTIxIDIzLjE3NjcgMjguMDA5MiAyNC4yMDk4QzI4LjA4NTMgMjUuNTg2MyAyOC4xMjkxIDI2LjM3NzkgMjguMDAwMSAyNi40OTk4QzI3LjkgMjYuNTk0NCAyNy41MDgzIDI2LjMzNDcgMjcuMDExOSAyNi4wMDU1QzI2LjM4MjQgMjUuNTg4IDI1LjU4NDYgMjUuMDU5IDI1LjAwMDEgMjQuOTk5OEMxNy4wMDAxIDI4Ljk5OTggMTEuNjk3MyAyNi44NjMgOS4xOTcxNyAyNC4yMTgxWk0yMC43Nzc4IDIxLjkyNDlDMjMuNTUyNSAxOS43ODM3IDI0LjA2NjEgMTUuNzk4NiAyMS45MjUgMTMuMDIzOUMxOS43ODM4IDEwLjI0OTIgMTUuNzk4OCA5LjczNTYxIDEzLjAyNDEgMTEuODc2N0MxMC4yNDkzIDE0LjAxNzkgOS43MzU3MyAxOC4wMDMgMTEuODc2OSAyMC43Nzc3QzE0LjAxOCAyMy41NTI0IDE4LjAwMzEgMjQuMDY2IDIwLjc3NzggMjEuOTI0OVoiIGZpbGw9IndoaXRlIi8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfMjExOF8xMDg1NSIgeD0iMi4zMjY1MSIgeT0iNC4yNjAyNSIgd2lkdGg9IjI5Ljc1NTYiIGhlaWdodD0iMjguOTU0MiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEyIDAiLz4KICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjExOF8xMDg1NSIvPgogICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18yMTE4XzEwODU1IiByZXN1bHQ9InNoYXBlIi8+CiAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzIxMThfMTA4NTUiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMTA3MSAxNy45OTk5KSByb3RhdGUoNDQuMjgzKSBzY2FsZSgyMi4xOTk4KSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMC41NTg2NzgiIHN0b3AtY29sb3I9IiM2RDkzRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNUQ4N0ZGIi8+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KPC9zdmc+Cg==";

// Регулярки для поиска сискодов и координат
const firmRegex = /(?<=firm\/)[0-9]*/g
const geoRegex = /(?<=(geo|inside|platform|stationEntrance|station)\/)[0-9]*/g
const coordRegex = /(?<=\/|C|=)[0-9-]{1,3}\.[0-9]*/g

// Объявим переменные для отслеживания состояния
let panelCreated = false;
let panelCreationPromise = null;
const buttonElements = {
    fijiLink: null,
    yaGroup: null,
    rosreestrGroup: null,
    fijiSysCode: null,
    irYouraGroup: null
};

// Создаем элементы ЗАРАНЕЕ
const fijiLink = createButton("link");
const fijiSysCode = createButton("fiji-syscode");
const irYouraGroup = createDropdownGroup("ir-youra-group");
const yaGroup = createDropdownGroup("ya-group");
const rosreestrGroup = createDropdownGroup("rosreestr-group");

console.log('🔧 Content script initialized');


// Функция для гарантированного создания панели
function ensurePanelCreated() {
    if (panelCreated) {
        return Promise.resolve();
    }
    
    if (panelCreationPromise) {
        return panelCreationPromise;
    }
    
    panelCreationPromise = new Promise((resolve) => {
        // Пытаемся найти существующую панель
        const existingPanel = document.querySelector('.link-under-the-coord');
        if (existingPanel) {
            panelCreated = true;
            resolve();
            return;
        }
        
        // Ищем контейнер и создаем панель
        const trafficLink = document.querySelector('a[href$="?traffic"]');
        if (!trafficLink) {
            // Ждем появления traffic link
            const observer = new MutationObserver(() => {
                const trafficLink = document.querySelector('a[href$="?traffic"]');
                if (trafficLink) {
                    observer.disconnect();
                    createPanel(trafficLink);
                    resolve();
                }
            });
            
            observer.observe(document.body, { childList: true, subtree: true });
            
            // Таймаут на случай если traffic link никогда не появится
            setTimeout(() => {
                observer.disconnect();
                createPanelInAnyContainer();
                resolve();
            }, 5000);
        } else {
            createPanel(trafficLink);
            resolve();
        }
    });
    
    return panelCreationPromise;
}

function createPanel(trafficLink) {
    const trafficButton = trafficLink.querySelector('button');
    const container = trafficButton?.parentElement?.parentElement?.parentElement;
    
    if (container) {
        const linksPanel = document.createElement('div');
        linksPanel.className = "link-under-the-coord";
        linksPanel.style.cssText = "display:none; float:right; margin-right:12px;";
        
        // Добавляем все элементы
        linksPanel.append(fijiLink, yaGroup, rosreestrGroup, fijiSysCode, irYouraGroup);
        container.append(linksPanel);
        
        panelCreated = true;
    } else {
        createPanelInAnyContainer();
    }
}

function createPanelInAnyContainer() {
    // Ищем альтернативный контейнер
    const possibleContainers = [
        document.querySelector('.header__controls'),
        document.querySelector('.map-controls'),
        document.querySelector('.controls-container'),
        document.querySelector('header'),
        document.body
    ];
    
    for (const container of possibleContainers) {
        if (container) {
            const linksPanel = document.createElement('div');
            linksPanel.className = "link-under-the-coord";
            linksPanel.style.cssText = "display:none; float:right; margin-right:12px; position: absolute; top: 10px; right: 10px; z-index: 1000;";
            
            linksPanel.append(fijiLink, yaGroup, rosreestrGroup, fijiSysCode, irYouraGroup);
            container.append(linksPanel);
            
            panelCreated = true;
            return;
        }
    }
}

// Функция для создания выпадающей группы кнопок (универсальная)
function createDropdownGroup(className, config = {}) {
    const group = document.createElement('div');
    group.className = className;
    group.style.cssText = `
        display: flex; 
        width: 40px; 
        height: 40px; 
        border: none;
        overflow: visible;
        margin-left: 2px; 
        margin-right: 2px; 
        border-radius: 4px; 
        box-shadow: 0 1px 3px rgba(38,38,38,0.5); 
        box-sizing: border-box; 
        background: #ffffff; 
        color: #262626; 
        float: left;
        align-items: center;
        justify-content: center;
        position: relative;
    `;
    
    // Сохраняем в глобальный объект
    if (className === 'ir-youra-group') buttonElements.irYouraGroup = group;
    else if (className === 'ya-group') buttonElements.yaGroup = group;
    else if (className === 'rosreestr-group') buttonElements.rosreestrGroup = group;

    // Основная кнопка
    const mainButton = document.createElement('div');
    mainButton.className = 'main-button';
    mainButton.style.cssText = `
        width: 40px; 
        height: 40px; 
        padding: 0;
        display: flex; 
        align-items: center; 
        justify-content: center;
        border-radius: 4px;
        overflow: hidden;
        border: none;
        background: transparent;
        cursor: pointer;
        transition: background-color 0.2s ease;
    `;
    
    // Кнопка-стрелочка
    const arrowButton = document.createElement('div');
    arrowButton.className = 'arrow-button';
    arrowButton.style.cssText = `
        position: absolute;
        top: 40px;
        width: 38px;
        height: 15px;
        background: #ffffff;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 30;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: all 0.2s ease;
        border-radius: 0px 0px 45px 45px;
    `;
    arrowButton.innerHTML = '▼';
    arrowButton.style.fontSize = '8px';
    arrowButton.style.lineHeight = '8px';
    
    // Контейнер для выпадающих кнопок
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'dropdown-container';
    dropdownContainer.style.cssText = `
        position: absolute;
        top: 45px;
        width: 40px;
        background: transparent;
        border: none;
        display: none;
        flex-direction: column;
        align-items: center;
        z-index: 20;
        overflow: hidden;
        transition: height 0.3s ease;
    `;

    // Добавление элементов в группу
    group.appendChild(mainButton);
    group.appendChild(arrowButton);
    group.appendChild(dropdownContainer);
    
    // Состояние группы
    let isDropdownVisible = false;
    group._isDropdownVisible = false;
    
    // Показ стрелочки при наведении на основную кнопку
    mainButton.addEventListener('mouseenter', () => {
        arrowButton.style.display = 'flex';
        mainButton.style.backgroundColor = '#F0F8FF';
    });
    
    mainButton.addEventListener('mouseleave', () => {
        if (!isDropdownVisible) {
            mainButton.style.backgroundColor = 'transparent';
        }
    });
    
    // Скрытие стрелочки, если не наведено ни на основную кнопку, ни на стрелочку
    group.addEventListener('mouseleave', () => {
        if (!isDropdownVisible) {
            arrowButton.style.display = 'none';
            mainButton.style.backgroundColor = 'transparent';
        }
    });
    
    // Обработчик для стрелочки
    arrowButton.addEventListener('click', (e) => {
        e.stopPropagation();
        isDropdownVisible = !isDropdownVisible;
        group._isDropdownVisible = isDropdownVisible;
        
        if (isDropdownVisible) {
            // Показываем контейнер
            dropdownContainer.style.display = 'flex';
            
            // Рассчитываем общую высоту выпадающих кнопок
            const dropdownButtons = dropdownContainer.querySelectorAll('.dropdown-button');
            let totalHeight = 0;
            dropdownButtons.forEach(btn => {
                totalHeight += 40; // 40px высота каждой кнопки
            });
            
            // Устанавливаем высоту контейнера
            dropdownContainer.style.height = totalHeight + 'px';
            
            // Показываем выпадающие кнопки с задержкой для анимации
            setTimeout(() => {
                dropdownButtons.forEach((btn, index) => {
                    setTimeout(() => {
                        btn.style.height = '40px';
                        btn.style.opacity = '1';
                    }, index * 50);
                });
            }, 10);
            
            // Смена направления стрелочки
            arrowButton.innerHTML = '▲';
            arrowButton.style.top = (45 + totalHeight) + 'px';
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Подсветка основной кнопки
            mainButton.style.backgroundColor = '#F0F8FF';
        } else {
            // Скрываем выпадающие кнопки
            const dropdownButtons = dropdownContainer.querySelectorAll('.dropdown-button');
            dropdownButtons.forEach((btn, index) => {
                setTimeout(() => {
                    btn.style.height = '0';
                    btn.style.opacity = '0';
                }, index * 30);
            });
            
            // Скрываем контейнер после анимации
            setTimeout(() => {
                dropdownContainer.style.height = '0';
                setTimeout(() => {
                    if (!isDropdownVisible) {
                        dropdownContainer.style.display = 'none';
                    }
                }, 300);
            }, dropdownButtons.length * 30);
            
            // Возврат стрелочки
            arrowButton.innerHTML = '▼';
            arrowButton.style.top = '40px';
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Возврат цвета кнопки
            if (!group.matches(':hover')) {
                mainButton.style.backgroundColor = 'transparent';
            }
        }
        
        arrowButton.style.display = 'flex';
    });
    
    // Закрытие при клике на выпадающую кнопку
    dropdownContainer.addEventListener('click', (e) => {
        if (e.target.closest('.dropdown-button')) {
            setTimeout(() => {
                isDropdownVisible = false;
                group._isDropdownVisible = false;
                
                const dropdownButtons = dropdownContainer.querySelectorAll('.dropdown-button');
                dropdownButtons.forEach((btn, index) => {
                    setTimeout(() => {
                        btn.style.height = '0';
                        btn.style.opacity = '0';
                    }, index * 30);
                });
                
                setTimeout(() => {
                    dropdownContainer.style.height = '0';
                    setTimeout(() => {
                        dropdownContainer.style.display = 'none';
                    }, 300);
                }, dropdownButtons.length * 30);
                
                arrowButton.innerHTML = '▼';
                arrowButton.style.top = '40px';
                arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                
                if (!group.matches(':hover')) {
                    arrowButton.style.display = 'none';
                    mainButton.style.backgroundColor = 'transparent';
                }
            }, 100);
        }
    });
    
    // Скрытие при клике вне группы
    document.addEventListener('click', (e) => {
        if (!group.contains(e.target) && isDropdownVisible) {
            isDropdownVisible = false;
            group._isDropdownVisible = false;
            
            const dropdownButtons = dropdownContainer.querySelectorAll('.dropdown-button');
            dropdownButtons.forEach((btn, index) => {
                setTimeout(() => {
                    btn.style.height = '0';
                    btn.style.opacity = '0';
                }, index * 30);
            });
            
            setTimeout(() => {
                dropdownContainer.style.height = '0';
                setTimeout(() => {
                    dropdownContainer.style.display = 'none';
                }, 300);
            }, dropdownButtons.length * 30);
            
            arrowButton.innerHTML = '▼';
            arrowButton.style.top = '40px';
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            if (!group.matches(':hover')) {
                arrowButton.style.display = 'none';
                mainButton.style.backgroundColor = 'transparent';
            }
        }
    });
    
    // Обработчик наведения на стрелочку
    arrowButton.addEventListener('mouseenter', () => {
        arrowButton.style.backgroundColor = '#F0F8FF';
    });
    
    arrowButton.addEventListener('mouseleave', () => {
        arrowButton.style.backgroundColor = '#ffffff';
    });
    
    return group;
}

// Функция для обновления содержимого выпадающей группы
function updateDropdownGroup(group, links) {
    const mainButton = group.querySelector('.main-button');
    const dropdownContainer = group.querySelector('.dropdown-container');
    const arrowButton = group.querySelector('.arrow-button');
    
    // Очищаем содержимое
    if (mainButton) mainButton.innerHTML = '';
    if (dropdownContainer) dropdownContainer.innerHTML = '';
    
    // Основная кнопка (первая ссылка из массива)
    if (links[0] && mainButton) {
        mainButton.innerHTML = links[0];
        applyButtonStyles(mainButton, 'main');
    }
    
    // Выпадающие кнопки (остальные ссылки из массива)
    for (let i = 1; i < links.length; i++) {
        if (links[i]) {
            const dropdownButton = document.createElement('div');
            dropdownButton.className = 'dropdown-button';
            dropdownButton.style.cssText = `
                width: 40px;
                height: 0;
                background: #ffffff;
                border: none;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: ${i < links.length - 1 ? '2px' : '0'};
                cursor: pointer;
                overflow: hidden;
                transition: height 0.3s ease, opacity 0.2s ease;
                opacity: 0;
            `;
            
            dropdownButton.innerHTML = links[i];
            applyButtonStyles(dropdownButton, 'dropdown');
            dropdownContainer.appendChild(dropdownButton);
        }
    }
    
    // Сброс состояния стрелочки
    if (arrowButton) {
        arrowButton.style.top = '40px';
        arrowButton.innerHTML = '▼';
        arrowButton.style.display = 'none';
    }
    
    // Сброс состояния контейнера
    dropdownContainer.style.height = '0';
    dropdownContainer.style.display = 'none';
    
    group._isDropdownVisible = false;
    group.style.display = 'flex';
}

// Вспомогательная функция для применения стилей к кнопкам
function applyButtonStyles(container, type) {
    const link = container.querySelector('a');
    if (link) {
        link.style.cssText = `
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            height: 100%; 
            text-decoration: none;
            padding: 0;
            border: none;
            opacity: 1;
            transition: background-color 0.2s ease;
        `;
        
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#F0F8FF';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '#ffffff';
        });
    }
    
    // Обрабатываем все изображения внутри
    const images = container.querySelectorAll('img, svg, image');
    images.forEach(img => {
        img.style.cssText = `
            width: 32px; 
            height: 32px; 
            display: block;
            margin: 0;
            border: none;
            pointer-events: none;
        `;
    });
}

// Функция MAIN
async function fijIR(url) {
    console.log('=== fijIR called ===', url);
    
    // Ждем пока панель будет гарантированно создана
    await ensurePanelCreated();
    
    // Остальной код обработки URL
    let coord = url.match(coordRegex);
    let syscodeGeo = url.match(geoRegex);
    let syscodeFirm = url.match(firmRegex);

    console.log('Found:', { coord, syscodeGeo, syscodeFirm });

    if (coord && coord.length > 4) {
        coord = coord.slice(-4);
    }

    if(coord && coord.length >= 2){
        // Ссылки для Яндекс группы (две кнопки)
        const yaLinks = [
            `<a href="https://yandex.ru/maps/?l=sat%2Cstv%2Csta&ll=${coord[0]}%2C${coord[1]}&z=18" title="Перейти в Ya по координатам" target="_blank"><img width="32" height="32" src="${yaImage}"></a>`,
            `<a href="https://n.maps.yandex.ru/#!/?z=18&ll=${coord[0]}%2C${coord[1]}&l=nk%23sat" title="Перейти в Народную карту по координатам" target="_blank"><img width="32" height="32" src="${yaMapImage}"></a>`
        ];
        
        const R = 6378137; // радиус Земли в метрах (WGS84)

        const x = R * coord[0] * Math.PI / 180;
        const y = R * Math.log(Math.tan(Math.PI / 4 + coord[1] * Math.PI / 360));
        
        // Ссылки для Росреестр группы (три кнопки)
        const rosreestrLinks = [
            `<a href="https://nakarte.me/#m=17/${coord[1]}/${coord[0]}&l=O" target="_blank" title="Перейти в nakarte.me"><img width="32" height="32" src="${nakarteMe}"></a>`,
            `<a href="https://кадастр.сайт/%D0%BA%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BA%D0%B0%D1%80%D1%82%D0%B0#ct=${coord[1]}&cg=${coord[0]}&zoom=17&layer=dgis" target="_blank" title="Перейти на кадастр-сайт"><img width="32" height="32" src="${kadastrSite}"></a>`,
            `<a href="https://nspd.gov.ru/map?zoom=20&coordinate_x=${x}&coordinate_y=${y}&theme_id=1&is_copy_url=true&active_layers=36048%2C36049%2C36328%2C36329&baseLayerId=36344" target="_blank" title="Перейти в Геоинформационный портал nspd.gov.ru"><img width="32" height="32" src="${nspdGovRu}"></a>`,
            `<a href="https://map.ru/pkk?lon=${coord[0]}&lat=${coord[1]}&z=17" target="_blank" title="Перейти на map.ru"><img width="32" height="32" src="${mapRu}"></a>`
        ];
        
        // Кнопка Fiji для координат
        let moveToFiji = `<a href="fiji://view/lon=${coord[0]}&lat=${coord[1]}" title="Перейти в Fiji по координатам"><img width="32" height="32" src="${fijiImage}"></a>`;
        
        // Обновляем кнопки
        if (buttonElements.fijiLink) {
            buttonElements.fijiLink.innerHTML = moveToFiji;
            applyButtonStyles(buttonElements.fijiLink, 'main');
        }
        
        // Обновляем группы
        if (buttonElements.yaGroup) updateDropdownGroup(buttonElements.yaGroup, yaLinks);
        if (buttonElements.rosreestrGroup) updateDropdownGroup(buttonElements.rosreestrGroup, rosreestrLinks);
    }

    if (syscodeGeo) {
        let moveToFijiBySyscode;
        // Определяем иконку в зависимости от типа объекта
        if (url.match(/geo/g)) {
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image width="26" height="32" id="img1" href="${geoImage}"/></defs><use id="Background" href="#img1" x="3" y="0"/></svg></a>`;
        } else if ((url.match(/platform/g)) || (url.match(/station/g))) {
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду остановки"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image width="31" height="27" id="img1" href="${platformImage}"/></defs><style></style><use id="Background" href="#img1" x="1" y="2"/></svg></a>`;
        } else if (url.match(/stationEntrance/g)) {
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду входа в метро"><svg width="32px" height="32px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="metro_red_88" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="metro/88/bounding" fill="#FF0000" stroke="#FFFFFF"><circle id="Oval" cx="44" cy="44" r="43.5"></circle></g><polygon id="Page-1" fill="#FFFFFF" points="57 17 44 42 31 17 15 61 28 61 34 44 44 64 54 44 60 61 73 61"></polygon></g></svg></a>`;
        } else if (url.match(/inside\//g)) {
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a>`;
        }
        
        // Обновляем кнопку сискода
        if (buttonElements.fijiSysCode) {
            buttonElements.fijiSysCode.innerHTML = moveToFijiBySyscode;
            applyButtonStyles(buttonElements.fijiSysCode, 'main');
        }
    }
    
    if (syscodeFirm) {
        // YouRa - основная кнопка, IR - выпадающая
        const irYouraLinks = [
            `<a href="https://youra.2gis.ru/card/${syscodeFirm}" title="Перейти в YouRa" target="_blank"><img width="32" height="32" src="${youraImage}"></a>`,
            `<a href="dgis://editcard/id=${syscodeFirm}&sV=true" title="Перейти в IR"><img width="32" height="32" src="${infoRussiaImage}"></a>`
        ];
        
        // Обновляем группу
        if (buttonElements.irYouraGroup) {
            updateDropdownGroup(buttonElements.irYouraGroup, irYouraLinks);
        }
    }

    const visible = [];
    if (coord && coord.length >= 2) visible.push('link', 'ya-group', 'rosreestr-group');
    if (syscodeGeo) visible.push('fiji-syscode');
    if (syscodeFirm) visible.push('ir-youra-group');

    console.log('Will show buttons:', visible);
    showButtons(visible);
}

// Создание простых кнопок
function createButton(className) {
    const button = document.createElement('div');
    button.className = className;
    button.style.cssText = `
        width: 40px;
        height: 40px;
        border: none;
        overflow: hidden;
        padding: 0;
        margin-left: 2px;
        margin-right: 2px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(38,38,38,0.5);
        box-sizing: border-box;
        background: #ffffff;
        color: #262626;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    button.onmouseover = () => button.style.backgroundColor = '#F0F8FF';
    button.onmouseout = () => button.style.backgroundColor = 'white';

    // Сохраняем в глобальный объект
    if (className === 'link') {
        buttonElements.fijiLink = button;
    } else if (className === 'fiji-syscode') {
        buttonElements.fijiSysCode = button;
    }
    
    return button;
}

// Обновленная функция showButtons
function showButtons(visibleClasses) {
    setTimeout(() => {
        const allButtons = {
            'link': buttonElements.fijiLink,
            'ya-group': buttonElements.yaGroup,
            'rosreestr-group': buttonElements.rosreestrGroup,
            'fiji-syscode': buttonElements.fijiSysCode,
            'ir-youra-group': buttonElements.irYouraGroup
        };
        
        let hasVisible = false;

        Object.entries(allButtons).forEach(([className, btn]) => {
            if (btn) {
                const shouldShow = visibleClasses.includes(className);
                btn.style.display = shouldShow ? 'flex' : 'none';
                if (shouldShow) hasVisible = true;
            }
        });

        const panel = document.querySelector('.link-under-the-coord');
        if (panel) {
            panel.style.display = hasVisible ? 'flex' : 'none';
        }
    }, 100);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Гарантируем создание панели при загрузке
    ensurePanelCreated().then(() => {
        // Запускаем обработку текущего URL
        fijIR(window.location.href);
    });
});

// Функция для ожидания элемента
function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        callback(element);
        return;
    }
    
    const observer = new MutationObserver((mutations, obs) => {
        const element = document.querySelector(selector);
        if (element) {
            obs.disconnect();
            callback(element);
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}


// Прослушка обновления ссылки
function hrefHandler() {
    let currentHref = window.location.href;
    let firstOpen = true;

    this.detect = function () {
        const newUrl = window.location.href;
        if (newUrl !== currentHref || firstOpen) {
            firstOpen = false;
            currentHref = newUrl;
            fijIR(newUrl);
        }
    };

    this.Check = setInterval(this.detect.bind(this), 500);
}

const hrefDetection = new hrefHandler();

// Экспорт для отладки
if (typeof window !== 'undefined') {
    window.fijiExtension = {
        ensurePanelCreated,
        fijIR,
        buttonElements
    };
}
