import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const ShoppingList = (ingredientsList) => {
  return (
    <div>
			<Page size="A4" style={styles.page}>
			<View style={{flexDirection: "column", width: 400}}>
			{
				ingredientsList?.map((ingredient) =>   					
						<View style={{ flexDirection: "row", marginBottom: 4 }}>
								<Text style={{ marginHorizontal: 8 }}>•</Text>
								<Text> {ingredient} </Text>
						</View>	
				)
			}
			</View>
			</Page>
    </div>
  )
}

export default ShoppingList