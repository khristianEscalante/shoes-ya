<template>
    <div class="min-h-screen bg-gray-300">
        <div class="md:grid md:grid-cols-3 gap-2 bg-white ">
            <div class="col-span-2 p-5">
                <h1 class="text-xl font-medium ">Shopping Cart</h1>
                <div class="flex justify-between items-center mt-6 pt-6">
                    <div class="flex  items-center">
                        <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full ">

                        <div class="flex flex-col ml-3">
                            <span class="md:text-md font-medium">Chicken momo</span>
                            <span class="text-xs font-light text-gray-400">#41551</span>

                        </div>


                    </div>

                    <div class="flex justify-center items-center">

                        <div class="pr-8 flex ">
                            <span class="font-semibold">-</span>
                            <input type="text"
                                class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                value="1">
                            <span class="font-semibold">+</span>
                        </div>

                        <div class="pr-8 ">

                            <span class="text-xs font-medium">$10.50</span>
                        </div>
                        <div>
                            <i class="fa fa-close text-xs font-medium"></i>
                        </div>

                    </div>

                </div>
            </div>
            <div id="summary" class="w-full h-full px-8 py-16 bg-gray-100 rounded-r-lg">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items 3</span>
                    <span class="font-semibold text-sm">$150</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div class="py-10">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                    <input type="text" id="promo" placeholder="Enter your code"
                        class="p-2 text-sm w-full border rounded" />
                </div>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$160</span>
                    </div>
                    <button
                        class="bg-green-500  font-semibold hover:bg-green-600  py-3 text-sm text-white uppercase w-full rounded">Hacer
                        pedido</button>
                    <button
                        class="bg-gray-500  font-semibold hover:bg-gray-600 my-2 py-3 text-sm text-white uppercase w-full rounded">Continuar
                        comprando</button>
                </div>
            </div>
        </div>

    </div>

</template>